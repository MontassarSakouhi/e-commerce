import { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Image, Upload, Button, Input, Select, Checkbox, Spin } from 'antd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Axios } from '../../services/api';
import { toast } from 'react-toastify';

const { Option } = Select;

const AddProduct = () => {
    const [fileList, setFileList] = useState([]);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };

    const handleChange = async ({ fileList: newFileList }, setFieldValue) => {
        const base64Files = await Promise.all(
            newFileList.map(async (file) => {
                if (file.originFileObj && !file.base64) {
                    const base64 = await getBase64(file.originFileObj);
                    return { ...file, base64 };
                }
                return file;
            })
        );
        setFileList(base64Files);
        setFieldValue('images', base64Files);
    };

    const uploadButton = (
        <button
            className="border-2 border-white text-white bg-transparent py-2 px-4 rounded-lg flex flex-col items-center cursor-pointer"
            type="button"
        >
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );

    const validationSchema = Yup.object({
        name: Yup.string().required('Product name is required'),
        description: Yup.string().required('Product description is required'),
        price: Yup.number().required('Product price is required').positive('Price must be a positive number'),
        category: Yup.string().required('Category is required'),
        subCategory: Yup.string().required('Subcategory is required'),
        sizes: Yup.array().min(1, 'At least one size is required'),
        images: Yup.array().min(1, 'At least one image is required'),
        bestseller: Yup.boolean(),
    });

    return (
        <div className='w-[500px]'>
            <div className="my-3 text-[30px] text-white">Upload Images</div>

            <Formik
                initialValues={{
                    name: '',
                    description: '',
                    price: '',
                    category: '',
                    subCategory: '',
                    sizes: [],
                    images: fileList,
                    bestseller: false,
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                    setIsLoading(true);
                    const formData = {
                        ...values,
                        images: values.images.map((file) => file.base64 || file.url),
                    };

                    try {
                        const response = await Axios.post('/product/add', formData);
                        console.log('Form submitted:', formData);
                        resetForm();
                        setFileList([]);
                        toast.success('Product added')
                    } catch (error) {
                        console.error('Error submitting the form:', error);
                    } finally {
                        setIsLoading(false);
                    }
                }}
            >
                {({ setFieldValue, handleSubmit, values }) => (
                    <Form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="text-white">Product Name</label>
                            <Field
                                name="name"
                                as={Input}
                                className="w-full text-white bg-gray-800 border border-white p-2 rounded-lg focus:bg-gray-700"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500" />
                        </div>

                        <div>
                            <label htmlFor="description" className="text-white">Description</label>
                            <Field
                                name="description"
                                as={Input.TextArea}
                                className="w-full text-white bg-gray-800 border border-white p-2 rounded-lg focus:bg-gray-700"
                            />
                            <ErrorMessage name="description" component="div" className="text-red-500" />
                        </div>

                        <div>
                            <label htmlFor="price" className="text-white">Price</label>
                            <Field
                                name="price"
                                type="number"
                                as={Input}
                                className="w-full text-white bg-gray-800 border border-white p-2 rounded-lg focus:bg-gray-700"
                            />
                            <ErrorMessage name="price" component="div" className="text-red-500" />
                        </div>

                        <div>
                            <label htmlFor="category" className="text-white">Category</label>
                            <Field name="category">
                                {({ field }) => (
                                    <Select
                                        {...field}
                                        value={field.value}
                                        className="w-full text-white bg-gray-800 border border-white  rounded-lg focus:bg-gray-700"
                                        onChange={(value) => setFieldValue("category", value)}
                                    >
                                        <Option value="kids">Kids</Option>
                                        <Option value="women">Women</Option>
                                        <Option value="men">Men</Option>
                                    </Select>
                                )}
                            </Field>
                            <ErrorMessage name="category" component="div" className="text-red-500" />
                        </div>

                        <div>
                            <label htmlFor="subCategory" className="text-white">Subcategory</label>
                            <Field name="subCategory">
                                {({ field }) => (
                                    <Select
                                        {...field}
                                        value={field.value}
                                        className="w-full text-black"
                                        onChange={(value) => setFieldValue("subCategory", value)}
                                    >
                                        <Option value="sweaters">Sweaters</Option>
                                        <Option value="jeans">Jeans</Option>
                                        <Option value="shirt">Shirt</Option>
                                        <Option value="sweat">Sweat</Option>
                                        <Option value="shoes">Shoes</Option>
                                    </Select>
                                )}
                            </Field>
                            <ErrorMessage name="subCategory" component="div" className="text-red-500" />
                        </div>

                        <div>
                            <label htmlFor="sizes" className="text-white">Sizes</label>
                            <Select
                                mode="multiple"
                                placeholder="Select sizes"
                                value={values.sizes}
                                onChange={(value) => setFieldValue('sizes', value)}
                                className="w-full text-black !bg-gray-800 border border-white  rounded-lg focus:bg-gray-700"
                            >
                                <Option value="S">S</Option>
                                <Option value="M">M</Option>
                                <Option value="L">L</Option>
                                <Option value="XL">XL</Option>
                            </Select>
                            <ErrorMessage name="sizes" component="div" className="text-red-500" />
                        </div>

                        <div>
                            <Upload
                                listType="picture-card"
                                fileList={fileList}
                                onChange={(info) => handleChange(info, setFieldValue)}
                                onPreview={handlePreview}
                                beforeUpload={() => false}
                                action={null}
                            >
                                {fileList.length >= 8 ? null : uploadButton}
                            </Upload>
                            <ErrorMessage name="images" component="div" className="text-red-500" />
                        </div>

                        <div>
                            <Checkbox
                                checked={values.bestseller}
                                onChange={(e) => setFieldValue('bestseller', e.target.checked)}
                                className="text-white  "
                            >
                                Bestseller
                            </Checkbox>
                        </div>

                        <div>
                            <Button htmlType="submit" className="w-[150px] bg-gray-600 !hover:bg-gray-700 text-white">
                                {isLoading ? <Spin className='text-white' indicator={<LoadingOutlined spin />} size="medium" />

                                    : 'Submit'}
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>

            {previewImage && (
                <Image
                    wrapperStyle={{
                        display: 'none',
                    }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                />
            )}
        </div>
    );
};

export default AddProduct;

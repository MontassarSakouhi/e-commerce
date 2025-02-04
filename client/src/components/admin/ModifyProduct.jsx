import {useState} from 'react';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import {Button, Checkbox, Image, Input, Select, Spin, Upload} from 'antd';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {Axios} from '../../services/api';
import {toast} from 'react-toastify';

const {Option} = Select;

const ModifyProduct = ({product,onClose}) => {
    const [fileList, setFileList] = useState(product?.images?.map(file => {
        return {
            base64: file,
            thumbUrl: file
        }
    }));
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [isLoading, setIsLoading] = useState(false);


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

    const handleChange = async ({fileList: newFileList}, setFieldValue) => {
        const base64Files = await Promise.all(
            newFileList.map(async (file) => {
                if (file.originFileObj && !file.base64) {
                    const base64 = await getBase64(file.originFileObj);
                    return {...file, base64};
                }
                return file;
            })
        );
        setFileList(base64Files);
        setFieldValue('images', base64Files);
    };

    const uploadButton = (
        <button
            className="border-2   bg-transparent py-2 px-4 rounded-lg flex flex-col items-center cursor-pointer"
            type="button">
            <PlusOutlined/>
            <div style={{marginTop: 8}}>Upload</div>
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

    return product ? (
        <div className='w-[500px] p-6'>
             <Formik
                initialValues={{
                    _id:product._id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    category: product.category,
                    subCategory: product.subCategory,
                    sizes: product.sizes,
                    images: fileList,
                    bestseller: product.bestseller,
                }}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    console.log(values)
                    setIsLoading(true);
                    const formData = {...values, images: values.images.map((file) => file.base64 || file.url)};
                    try {
                        await Axios.put('/product/update', formData);
                        toast.success('Product updated');
                        onClose()
                    } catch (error) {
                        console.error('Error updating product:', error);
                    } finally {
                        setIsLoading(false);
                    }
                }}
            >
                {({setFieldValue, handleSubmit, values}) => (
                    <Form onSubmit={handleSubmit} className="space-y-4">
                        <Field name="name" as={Input} placeholder="Product Name"
                               className="w-full p-2 border rounded-lg"/>
                        <ErrorMessage name="name" component="div" className="text-red-500"/>
                        <Field name="description" as={Input.TextArea} rows={8} placeholder="Description"
                               className="w-full p-2 rounded-lg"/>
                        <ErrorMessage name="description" component="div" className="text-red-500"/>
                        <Field name="price" type="number" as={Input} placeholder="Price"
                               className="w-full p-2 rounded-lg"/>
                        <ErrorMessage name="price" component="div" className="text-red-500"/>
                        <Upload listType="picture-circle" fileList={fileList}
                                onChange={(info) => handleChange(info, setFieldValue)} onPreview={handlePreview}
                                beforeUpload={() => false}>
                            {fileList.length >= 8 ? null : uploadButton}

                        </Upload>
                        <ErrorMessage name="images" component="div" className="text-red-500"/>
                        <Checkbox checked={values.bestseller}
                                  onChange={(e) => setFieldValue('bestseller', e.target.checked)}>Bestseller</Checkbox>
                        <Button disabled={isLoading} htmlType="submit" className="w-[150px] bg-gray-100">
                            {isLoading ? <Spin indicator={<LoadingOutlined spin/>} size="medium"/> : 'Update'}
                        </Button>
                    </Form>
                )}
            </Formik>
            {previewImage &&
                <Image preview={{visible: previewOpen, onVisibleChange: setPreviewOpen}} src={previewImage}/>}
        </div>
    ) : <Spin size="large"/>;
};

export default ModifyProduct;
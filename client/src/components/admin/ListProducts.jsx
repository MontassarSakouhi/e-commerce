import React, { useEffect, useState } from 'react';
import { Table, Input, Button, Space, notification, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/Products/productsSlice';
import { Axios } from '../../services/api';
import { Trash2, Edit } from 'lucide-react';
import ModifyProduct from './ModifyProduct';

const ListProducts = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(products);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('/product/list');
        dispatch(setProducts(response.data.products));
        setFilteredData(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleSearch = (value) => {
    setSearchText(value);
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product._id.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleDelete = (id) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this product?',
      content: 'This action cannot be undone.',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: async () => {
        try {
          await Axios.post('/product/remove', { id });
          dispatch(setProducts(products.filter((product) => product._id !== id)));
          setFilteredData(filteredData.filter((product) => product._id !== id));

          notification.success({
            message: 'Product Deleted',
            description: 'The product has been successfully deleted.',
            duration: 2,
          });
        } catch (error) {
          console.error('Error deleting product:', error);

          notification.error({
            message: 'Deletion Failed',
            description: 'There was an error deleting the product.',
            duration: 2,
          });
        }
      },
    });
  };

  const handleEdit = (product) => {
    if (product) {
      setSelectedProduct(product);
      setIsModalOpen(true);
    } else {
      console.error("No product selected");
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Image',
      dataIndex: 'images',
      key: 'images',
      render: (images) => <img src={images[0]} alt="product" style={{ width: 50, height: 50, objectFit: 'cover' }} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button icon={<Edit />} onClick={() => handleEdit(record)} type="default" />
          <Button icon={<Trash2 />} onClick={() => handleDelete(record._id)} type="danger" />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Input
        placeholder="Search by ID or Name"
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
        style={{ marginBottom: 20 }}
      />
      <Table columns={columns} dataSource={filteredData} rowKey="_id" />

      <Modal open={isModalOpen} onCancel={handleModalClose} footer={null} title="Modify Product">
        {selectedProduct ? (
          <ModifyProduct product={selectedProduct} onClose={handleModalClose} />
        ) : (
          <p>Loading product details...</p>
        )}
      </Modal>
    </div>
  );
};

export default ListProducts;

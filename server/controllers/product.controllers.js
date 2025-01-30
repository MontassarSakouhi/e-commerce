const Product = require('../models/product.model');

const addProduct = async (req, res) => {
    try {
        const { name, description, price, images, category, subCategory, sizes, bestseller } = req.body;
     
        const newProduct = new Product({
            name,
            description,
            price,
            images,
            category,
            subCategory,
            sizes,
            bestseller,
        });
        

        await newProduct.save();
        res.status(201).send({ message: 'Product added successfully', product: newProduct });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Failed to add product', error: error.message });
    }
};


const listProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send({ products });
    } catch (error) {
        res.status(500).send({ message: 'Failed to retrieve products', error: error.message });
    }
};

const singleProduct = async (req, res) => {
    try {
        const { id } = req.body;
        console.log(id);
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).send({ message: 'Product not found' });
        }

        res.status(200).send({ product });
    } catch (error) {
        res.status(500).send({ message: 'Failed to retrieve product', error: error.message });
    }
};

const removeProduct = async (req, res) => {
    try {
        const { id } = req.body;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).send({ message: 'Product not found' });
        }

        res.status(200).send({ message: 'Product removed successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Failed to remove product', error: error.message });
    }
};

module.exports = { addProduct, listProducts, removeProduct, singleProduct };

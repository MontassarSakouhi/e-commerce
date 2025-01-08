import React from 'react';
import Title from '../components/title/Title';
import Filter from '../components/filter/Filter';
import { useSelector } from 'react-redux';
import ProductItem from '../components/productItem/ProductItem';

const Collection = () => {
  const { products } = useSelector(state => state.products);
  const { category, subCategory, sizes, priceSort } = useSelector(state => state.filters);
  const { search } = useSelector(state => state.search)

  const filterProducts = () => {
    let filtered = [...products];

    if (category.length > 0) {
      filtered = filtered.filter(product => category.includes(product.category));
    }
    if (search.length > 0) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (subCategory.length > 0) {
      filtered = filtered.filter(product => subCategory.includes(product.subCategory));
    }

    if (sizes.length > 0) {
      filtered = filtered.filter(product =>
        sizes.every(size => product.sizes.includes(size))
      );
      console.log(filtered)
    }

    if (priceSort === 'low') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (priceSort === 'high') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    } else if (priceSort === 'equals') {
      filtered = filtered.filter(product => product.price <= 50)
    }


    return filtered;
  };

  const filteredProducts = filterProducts();

  return (
    <div>
      <Title text1={'OUR'} text2={'COLLECTION'} />
      <Filter />
      <div className='flex flex-wrap justify-center gap-3 sm:gap-12  py-3 my-4 justify-items-center rounded-lg'>
        {filteredProducts.map(product => (
          <ProductItem key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Collection;

import React from 'react';
import Title from '../components/title';
import Filter from '../components/filter/Filter';
import { useSelector } from 'react-redux';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { filters } = useSelector(state => state.filters);
  const { products } = useSelector(state => state.products);

  const isAnyFilterActive =
    filters.women || filters.men || filters.kids || filters['<'] || filters['>'] || filters['<<'] ||
    filters.xs || filters.s || filters.m || filters.l || filters.xl;

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      (filters.women && product.category.toLowerCase() === 'women') ||
      (filters.men && product.category.toLowerCase() === 'men') ||
      (filters.kids && product.category.toLowerCase() === 'kids');

    const matchesSize =
      (filters.xs && product.sizes.includes('XS')) ||
      (filters.s && product.sizes.includes('S')) ||
      (filters.m && product.sizes.includes('M')) ||
      (filters.l && product.sizes.includes('L')) ||
      (filters.xl && product.sizes.includes('XL'));

    const matchesPrice =
      (filters['<'] && product.price < 50) ||
      (filters['>'] && product.price >= 50) ||
      (filters['<<'] && product.price < 50);

    return isAnyFilterActive
      ? (matchesCategory || matchesSize || matchesPrice)
      : true;  
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (filters['<<'] || filters['<']) {
      return a.price - b.price; 
    }
    if (filters['>']) {
      return b.price - a.price;  
    }
    return 0;  
  });

  return (
    <div>
      <Title text1={'OUR'} text2={'COLLECTION'} />
      <Filter />
      <div className='flex flex-wrap justify-center gap-3 sm:gap-12 shadow-lg py-3 my-4 justify-items-center rounded-lg'>
        {sortedProducts.map(product => (
          <ProductItem key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Collection;

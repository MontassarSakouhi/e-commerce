import React, { useEffect } from 'react';
import Hero from '../components/hero/Hero';
import LatestCollection from '../components/lastestCollection/LatestCollection';
import BestSeller from '../components/bestSeller/BestSeller';
import OurPolicy from '../components/ourPolicy/OurPolicy';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import { Axios } from '../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/Products/productsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const {products}=useSelector(state=>state.products)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('/product/list');
        dispatch(setProducts(response.data.products)); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [products]); 

  return (
    <>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <NewsLetter />
      <OurPolicy />
    </>
  );
};

export default Home;

import React from 'react'
import Hero from '../components/hero/Hero'
import LatestCollection from '../components/lastestCollection/LatestCollection'
import BestSeller from '../components/bestSeller/BestSeller'
import OurPolicy from '../components/ourPolicy/OurPolicy'
import NewsLetter from '../components/NewsLetter/NewsLetter'

const Home = () => {
  return (
    <>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <NewsLetter />
      <OurPolicy />
      

    </>
  )
}

export default Home
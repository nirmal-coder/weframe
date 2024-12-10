import React from 'react'
import Header from '../../components/Header'
import Product from '../../components/Product'
import SimilarProduct from '../../components/SimilarProduct'
import Card from '../../components/Card'
import MoreProduct from '../../components/MoreProduct'
import Features from '../../components/Features'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
    <Header />
    <Product />
    <SimilarProduct />
    <MoreProduct />
    <Features />
    <Footer />
    </>
    
  )
}

export default Home

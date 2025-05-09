import React, { useEffect } from 'react'
import Herosection from './Herosection'
import Featuredproducts from './Featuredproducts'
import Category from './Category'
import Specialoffers from './Specialoffers'
import Testimonals from './Testimonals'
import AboutUs from './AboutUs'
import { useSelector } from 'react-redux'


const Home = () => {
  const {users} = useSelector(state=>state.user);
  const {products} = useSelector(state=>state.product);
  
  useEffect(()=>{
    console.log(products)
  },[])
  console.log(users)

  return (
    <div>
    <Herosection/>
    <AboutUs/>
    <Featuredproducts/>
   
    <Category/>
    <Specialoffers/>
    <Testimonals/>
    </div>
  )
}

export default Home

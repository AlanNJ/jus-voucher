import React from 'react'
import Carousel_Cont from '../Carousel/Carousel_Cont'
import Category from '../Category/category'
import Client from '../Clients/Client'
import Content from '../Content/Content'
import Discount from '../Discount/discount'
import Gift from '../Gift/Gift'

import Trend from '../Trend/Trend'
import RainingDiscount from '../RainingDiscount/RainingDiscount'
import ClientTestimonial from '../ClientTestimonial/ClientTestimonial'

import "./Home.css";

const Home = () => {
  return (
    <div>
        
       <Carousel_Cont/>
       
       <Discount/>
       <Category/>
       <Content/>
       <Gift/>
       <RainingDiscount/>
       <Client/>
       <Trend/>
       <ClientTestimonial/>
       
    </div>
  )
}

export default Home;
import React from 'react'
import "./About.css"
import line from "../../Images/Rectangle 56.png"
import aboutusimg from "../../Images/aboutusimg.png"



export default function About_Us() {
  return (
    <div className='About_Us_wrapper'>
      <div className='About_Us_wrapper_heading'>
        <h1 className='About_Us_wrapper_heading_one'>Who are We</h1>
        <div className="line"><img src={line} /></div>
        <h3 className='About_Us_wrapper_heading_para'>Huge Discounts on Everything!</h3>



        <div className='About_Us_wrapper_paragraph'>
          <ul>

            <li> <p> You are a business that wants to market amazing offers to grow your ROI? We have got you covered.</p></li>
            <li><p> If you are a shopper or want to buy something with discounts, we’ve got your back boo!</p></li>
            <li><p>To make saving money easier, JusVouchers Portal offers you the biggest discounts on leading brands, with over 10,000 deals available every day. With JusVouchers Portal, you can save money while shopping. How? It's as simple as searching for your favorite brand and taking advantage of the best available deals to get your money back.</p> </li>
            <li><p> With JusVouchers, you'll never have to worry about a thing when it comes to securing the best deals on your favorite items from all the businesses.</p>
            </li>


          </ul>

        </div>

      </div>

      <div className='About_Us_wrapper_image'>

        <img src={aboutusimg}></img>
      </div>




    </div>
  )
}


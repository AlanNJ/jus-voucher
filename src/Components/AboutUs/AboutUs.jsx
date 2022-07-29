import React from 'react'
import "./AboutUs.css"
import vision from "../../Images/AboutUs/Vision.png";
import vector from "../../Images/AboutUs/Vector.png";
import vector01 from "../../Images/AboutUs/Vector 11.png";
import vector02 from "../../Images/AboutUs/Vector 12.png";
import vector03 from "../../Images/AboutUs/Vector 13.png";
import vector04 from "../../Images/AboutUs/Vector 14.png";
import { BsFillTriangleFill } from 'react-icons/bs';



const AboutUs = () => {
  return (
    <div  className='aboutus'>
      <div>
        <h1 className='heading-1'>Who are We</h1>
        <div className='color-line'></div>
        <h3 className='para-1'>Huge Discounts on Everything!</h3>
        <div className='text'>
          <div className='para-2'>
            <ul>

              <li>You are a business that wants to market amazing offers to grow your ROI? We have got you covered.</li><br />
              <li>If you are a shopper or want to buy something with discounts, we’ve got your back boo!</li><br />
              <li>To make saving money easier, JusVouchers Portal offers you the biggest discounts on leading brands, with over 10,000 deals available every day. With JusVouchers Portal, you can save money while shopping. How? It's as simple as searching for your favorite brand and taking advantage of the best available deals to get your money back.
              </li><br />
              <li>With JusVouchers, you'll never have to worry about a thing when it comes to securing the best deals on your favorite items from all the businesses.
              </li>


            </ul>

          </div>


        </div>

        <span style={{ marginLeft: '48rem', display: 'flex', marginTop: '-17rem' }} >
          <div style={{ display: 'inline-block' }}>
            <img className='about_img' style={{  position: 'relative', left: '6rem' }} src={vector02} />
            <img style={{ width: '12rem', height: '12rem', position: 'relative', right: '5rem' }} src={vector03} />
            <img style={{ width: '12rem', height: '12rem', position: 'relative', left: '6rem' }} src={vector04} />
          </div>
          <img width='100%' height='643px' src={vector01} />

        </span>

      </div>

      <div className='vision'>

        <div className='parent'>
          <div className='child-one'><img style={{width:'100%',height:'5rem',paddingTop:'.625rem'}}  src={vision}></img></div>
          <div className='child-2'><h1>Vision</h1>   <p className='vision-para'>JusVouchers will make sure you never miss a chance to save money when shopping for things that will become a part of your everyday life from top brands and local retailers! And we will help your brand grow bigger and bigger with the best offers for your customers.</p></div>
        </div>



        <div className='parent'>
          <div className='child-one'><img style={{width:'100%',height:'5rem',paddingTop:'.625rem'}} src={vector}></img></div>
          <div className='child-2'><h1>Mission</h1>   <p className='vision-para'>JusVouchers will make sure you never miss a chance to save money when shopping for things that will become a part of your everyday life from top brands and local retailers! And we will help your brand grow bigger and bigger with the best offers for your customers.</p></div>
        </div>
      </div>

      <div className='Smart-steps'>

        <h1 className='smart-1'>Smart Saving Money tips</h1>
        <div className='color-line'></div>
        <br />
        <br />



        <div style={{ display: 'flex' }}><div className='card-1' style={{ background: '#EC5656' }}><h1>Step 01</h1></div><div className='card-white' ><BsFillTriangleFill className='icon-one' /><p className='paragraph'>Shopping is one of our favorite past times. Finding the ideal dress and shoes can make or break a wedding day, and we've all been there. For this reason, Vouchers Portal places infinite discounts and offers on top of your shopping list - it's like a cherry on top of the cake!</p></div></div><br />
        <div style={{ display: 'flex' }}><div className='card-2' style={{ background: '#023047' }}><h1>Step 02</h1></div><div className='card-white' ><BsFillTriangleFill className='icon-two' /><p className='paragraph'>To ensure that every shopping trip ends with a joyful cart and that your favorite products fit snugly in your wallet, we provide all the tools you need. Take a look at things through our customers' eyes!

        </p></div></div><br />
        <div style={{ display: 'flex' }}><div className='card-3' style={{ background: '#F07E7E' }}><h1>Step 03</h1></div><div className='card-white' ><BsFillTriangleFill className='icon-three' /><p className='paragraph'>For example, let's assume you're planning to get the latest gaming laptop so that you can play your favorite games whenever you want. You compare the greatest options, such as Asus, Lenovo, and Dell, and discover just what you're looking for. It's all about the cost.

        </p></div></div><br />
        <div style={{ display: 'flex' }}><div className='card-4' style={{ background: '#446677' }}><h1>Step 04</h1></div><div className='card-white' ><BsFillTriangleFill className='icon-four' /><p className='paragraph'>But if you're a savvy shopper, you can take advantage of our coupons to get the most out of your shopping trip.

        </p></div></div><br />
        <div style={{ display: 'flex' }}><div className='card-5' style={{ background: '#EC5656' }}><h1>Step 05</h1></div><div className='card-white' ><BsFillTriangleFill className='icon-five' /><p className='paragraph'>But what if you're not successful in finding the perfect match? There's nothing to be concerned about! We offer a wide variety of retailers, from big-name brands to small-town merchants, that are known for providing excellent service and creative products at reasonable prices.

        </p></div></div><br />
        <div style={{ display: 'flex' }}><div className='card-6' style={{ background: '#023047' }}><h1>Step 06</h1></div><div className='card-white' ><BsFillTriangleFill className='icon-six' /><p className='paragraph'>So, here's a simple strategy that can make you a savvy shopper: Go through the brands, locate the best one, use the discount to obtain the greatest deal, and fill your cart with your wishlist at fantastic prices!

        </p></div></div><br />



      </div>




    </div>
  )
}

export default AboutUs;
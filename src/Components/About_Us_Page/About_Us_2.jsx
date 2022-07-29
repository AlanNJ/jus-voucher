import React from 'react'
import vision from "../../Images/Vision.png"
import vector from "../../Images/Vector.png"


const Vision = () => {
  return (
    <div>
      <div className='About_us_part'>

        <div className='About_vision'>
          <div className='About_vision_img'><img src={vision}></img></div>
          <div className='About_lines'><h1 className='About_text'>Vision</h1>   <p >JusVouchers will make sure you never miss a chance to save money when shopping for things that will become a part of your everyday life from top brands and local retailers! And we will help your brand grow bigger and bigger with the best offers for your customers.</p></div>
        </div>



        <div className='About_vector'>
          <div className='About_vector_img'><img src={vector}></img></div>
          <div className='About_lines'><h1 className='About_text'>Mission</h1>
          <p >JusVouchers will make sure you never miss a chance to save money when shopping for things that will become a part of your everyday life from top brands and local retailers! And we will help your brand grow bigger and bigger with the best offers for your customers.</p></div>
        </div>
      </div>


    </div>
  )
}

export default Vision
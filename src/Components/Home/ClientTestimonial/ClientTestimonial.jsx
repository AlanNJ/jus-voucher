import React from 'react'
import "./ClientTestimonial.css"
import man from "../../../Images/man.png";
import { Carousel } from 'react-responsive-carousel';

function ClientTestimonial() {
  return (
    <div className='testimonialclient_container'>
      <div className="testimonial">
        <h1 className='client_head'>Client Testimonial</h1>
        <p className='client_para'>Our work speak for itself. We are 100% commited towards the best quality product delivery.</p>
        <form action="">
          <input type="text" className='client_input' placeholder='Name' /> <br />
          <textarea name="" id="" cols="30" rows="10" className='client_textarea' placeholder='Message'></textarea> <br />
          <button className='ex_button'>Exclusive Package</button>

        </form>
      </div>


      <div className="carousel_div4">
        <Carousel
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}

        >

          <div className="clientcarousel">
            <div className="img_head">
              <div className="img_head1"><img src={man} alt="" className='client_img' /></div>
              <div className="img_head2">
                <h3 className='head3'>Akash Singh</h3>
                <h4 className='head4'>UI UX Designer</h4>
              </div>
            </div>
            <p className='carouselpara'>"TechJain is the best web development firm I have ever worked with. Not only did the firm keep us informed, but also worked day and night to create the website that left our clients in awe. Apart from that, their after sales services are commendable.
              Our firm is really proud to have worked with such innovative and brilliant teams at TechJain.</p>

          </div>
          <div className="clientcarousel">
            <div className="img_head">
              <div className="img_head1"><img src={man} alt="" className='client_img' /></div>
              <div className="img_head2">
                <h3 className='head3'>Akash Singh</h3>
                <h4 className='head4'>UI UX Designer</h4>
              </div>
            </div>


            <p className='carouselpara'>"TechJain is the best web development firm I have ever worked with. Not only did the firm keep us informed, but also worked day and night to create the website that left our clients in awe. Apart from that, their after sales services are commendable.
              Our firm is really proud to have worked with such innovative and brilliant teams at TechJain.</p>

          </div>

        </Carousel>
      </div>

    </div>
  )
}

export default ClientTestimonial

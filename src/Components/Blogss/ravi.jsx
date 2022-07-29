import React from "react";
import "./Blog.css"
import img1 from "../../images/image 24.png" 
import img2 from "../../images/Rectangle 69.png"
import img3 from "../../images/image 24 (1).png"
import img4 from "../../images/Rectangle 69.png"
import img5 from "../../images/Rectangle 69.png"
import img6 from "../../images/image 25.png"
import img7 from "../../images/Rectangle 69.png"
import img8 from "../../images/image 26.png"


const Blogs = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className="grid-container">
      <div className="grid-item"><img src={img1}/></div>
      <div className="grid-item"><img src={img2}/></div>
      <div className="grid-item"><img src={img3}/></div>
      <div className="grid-item"><img src={img4}/></div>
      <div className="grid-item"><img src={img5}/></div>
      <div className="grid-item"><img src={img6}/></div>
      <div className="grid-item"><img src={img7}/></div>
      <div className="grid-item"><img src={img8}/></div>
    </div>
   
    </>
  );
};

export default Blogs;

import React from "react";
import line from "../../../Images/Discount/Line 14.png";
import Arrow from "../../../Images/Categories/Arrow 1.png";
import Frame from "../../../Images/Categories/Frame 2.png";
import Frame1 from "../../../Images/Categories/Frame 1.png";
import spa from "../../../Images/Categories/Spa-pana.png";
import Online from "../../../Images/Categories/online.png";
import Ecom from "../../../Images/Categories/Ecom.png";
import Discount from "../../../Images/Categories/Discount-pana.png";
import { Link } from "react-router-dom";
import "./category.css";
const Category = () => {
  return (
    <>
      <div className="category-container">
        <div className="head_container">
          <div className="line"><img src={line} /></div>
          <h2 className="head-section">Categories</h2>
          <div className="line"><img src={line} /></div>
        </div>

        <div className="cat_parent">

          <div className="catleft">
            <h4 className="catleft_head">Popular categories</h4>
            <img src={Arrow} alt=""  className="arrow1"/>
            <h5 className="cat_h5">View All</h5>

          </div>
          <div className="catright">
            <div className="health_card">
              <Link to="/health" >
                <img src={Frame} alt="" />
                <h3>Health Plus Cards</h3>

              </Link>

            </div>
            <div className="health_card">
              <Link to="/health" >
                <img src={Frame1} className="salon" alt="" />
                <h3>Saloon</h3>

              </Link>

            </div>
            <div className="health_card">
              <Link to="/health" >
                <img src={spa} alt="" />
                <h3>SPA</h3>

              </Link>

            </div>
            <div className="health_card">
              <Link to="digital" >
                <img src={Online} alt="" />
                <h3>Online  Marketing</h3>

              </Link>

            </div>
            <div className="health_card">
              <Link to="collaborating" >
                <img src={Ecom} alt="" />
                <h3>Offline  Marketing</h3>

              </Link>

            </div>
            <div className="health_card">
            <Link to="/health" >
              <img src={Discount} alt="" />
              <h3>Discount Vouchers</h3>

            </Link>

          </div>
          </div>
          

        
      </div>
    </div>
    </>
  );
};

export default Category;

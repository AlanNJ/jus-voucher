import React from 'react'
import "./GetQuote.css";
import {Link} from "react-router-dom";

function GetQuote() {
  return (
    <Link to="/">  <div className="getquote">Get Quote</div> </Link>
  )
}

export default GetQuote;
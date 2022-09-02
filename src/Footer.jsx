import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <p></p>
        <img src={`${process.env.PUBLIC_URL}/picsabaylogo.png`} alt="" height="20px" width="100px" />
    </div>
  )
}

export default Footer
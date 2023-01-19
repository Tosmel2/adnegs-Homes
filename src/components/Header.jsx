import React from 'react'
import logo from '../assets/mylogo.png';

const Header = () => {
  return (
    <div className='header'>
      <nav>
        <div className="logo">
        <img src={logo} alt="My logo" />
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">LandLord</a></li>
          <li><a href="/">Tenants</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>
      </nav>
      <div className="header-content row">
        <h1 className='heading-text'>The Most Affortable Place To stay In The San Franciso Bay Area</h1>
        <div className="heading-map">
        <iframe className="position-relative rounded w-full h-100" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8851856965694!2d3.34320711426848!3d7.139273617680197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x61fc9ec0c3d0a852!2sNYSC%20Mini%20Secretariat%20%2C%20Oke%20Ilewo%2C%20Abeokuta%20Ogun%20State!5e0!3m2!1sen!2sng!4v1640728238812!5m2!1sen!2sng"
          frameborder="0" style={{minheight: 350, border:0}} allowfullscreen="" aria-hidden="false"
          tabindex="0" title="myMap">
        </iframe>
        </div>
      </div>
    </div>
  )
}

export default Header
import React from 'react'
import logomi from '../assets/logomi.png';


const Footer = () => {
  return (
    <div className='footer_container'>
      <div className='row footer-content mt-14'>
        <div className='footer-left'>
        <img src={logomi} className='mb-5 logomi object-cover object-center ' alt='logomi'/>
          {/* <h1 style={{color: '#F4511E'}}>MLC LOGO</h1> */}
        </div>
        <div className='footer-right text-center leading-8'>
          <p><i class="fa-solid fa-location-dot"></i>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
          <p><span className='mr-4'><i class="fa-solid fa-phone"></i>(234) 806-8957-966</span> <span className='ml-4'><i class="fa-solid fa-print"></i>(123) 456-7890</span></p>
          <p><span className='p-3'> Social Media </span><br />
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-google-plus-g"></i>
          <i class="fa-brands fa-square-pinterest"></i>
          <i class="fa-solid fa-rss"></i>
          </p>
        </div>
      </div>
      <div className='row footer-links'>
        <div>
          <a href='/'>About us</a>
          <a href='/'>Contact us</a>
          <a href='/'>Help</a>
          <a href='/'>Privacy policy</a>
          <a href='/'>Disclaimer</a> 
        </div>
        <p>Copyright © 2023 Minimumlivingcost. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
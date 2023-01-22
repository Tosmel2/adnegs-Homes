import React from 'react'
import fl1 from '../assets/fl1.png';
import fl2 from '../assets/fl2.png';
import fl3 from '../assets/fl3.png';
import fl4 from '../assets/fl4.png';


const Services = () => {
  return (
    <div className='services_container'>
      <div className='row'>
        <div className='services_left'>
          <div class="parent">
            <div class="div1">
              <img src={fl3} alt="fl3" />
            </div>
            <div class="div2">
              <img src={fl2} alt="fl2" />
            </div>
            <div class="div3">
              <img src={fl4} alt="fl4" />
            </div>
            <div class="div4">
              <img src={fl1} alt="fl1" />
            </div>
          </div>
        </div>
        <div className='services_right pt-10'>
          <h2 className='pt-7'>Flexibility and options to suit your lifestyle.</h2>
          <p>You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.</p>
          <a href='/'>Search Rooms</a>
        </div>
      </div>
    </div>
  )
}

export default Services
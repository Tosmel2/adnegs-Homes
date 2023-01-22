import React from 'react'
import testi1 from '../assets/testi1.png';
import avat from '../assets/avat.png';

const Testimony = () => {
  return (
    <div className='testimony_container mb-10 w-full'>
      <div className='testimony_content'>

        <div className='testimony_left'>
        <div class="p-4 w-full">
        <div class="h-full p-3 rounded">
        <svg width="50" height="40" viewBox="0 0 70 60" class="block absolute opacity-50 md:ml-2 sm:ml-2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M70.6886 9.37093C60.1011 14.577 54.8074 20.6941 54.8074 27.7223C59.3201 28.243 63.0517 30.0868 66.0024 33.2538C68.953 36.4208 70.4283 40.0867 70.4283 44.2516C70.4283 48.6768 68.9964 52.4078 66.1325 55.4447C63.2687 58.4816 59.6672 60 55.3281 60C50.4682 60 46.2593 58.0261 42.7011 54.0781C39.143 50.1301 37.364 45.3363 37.364 39.6963C37.364 22.7765 46.8232 9.54452 65.742 0L70.6886 9.37093ZM33.3246 9.37093C22.6503 14.577 17.3132 20.6941 17.3132 27.7223C21.9127 28.243 25.6877 30.0868 28.6384 33.2538C31.589 36.4208 33.0643 40.0867 33.0643 44.2516C33.0643 48.6768 31.6107 52.4078 28.7034 55.4447C25.7962 58.4816 22.1731 60 17.8339 60C12.974 60 8.78679 58.0261 5.27206 54.0781C1.75734 50.1301 0 45.3363 0 39.6963C0 22.7765 9.41585 9.54452 28.2478 0L33.3246 9.37093Z" fill="#F4511E"/>
          </svg>
          <p class="leading-relaxed mb-6 mt-5 md:ml-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.</p>
          <a class="inline-flex items-center md:ml-3" href='/'>
          <img src={avat} className='w-15 h-15 rounded-full flex-shrink-0 object-cover object-center ' alt='testimonial'/>
            <span class="flex-grow flex flex-col pl-2">
              <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
              <span class="text-gray-500 text-sm">Property Owner</span>
            </span>
          </a>
          <div className="mt-5 md:ml-6 sm:ml-5">
          <span className="dot activee" onclick="currentSlide(1)"></span>
          <span className="dot" onclick="currentSlide(2)"></span>
          <span className="dot" onclick="currentSlide(3)"></span>
        </div>
        </div>
 
        </div>
        </div>

        <div className='testimony_right relative' style={{ 
          backgroundImage: `url(${testi1})`,
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'center',
         backgroundSize: 'cover',
         }}>

          <span className='absolute inset-0 flex items-center justify-center'><i class="fa-solid fa-play text-center text-2xl" style={{padding: '8px', backgroundColor: '#F4511E', color: '#fff', borderRadius: '50%', height:'50px', width: '50px'}}></i></span>
          
        </div>

      </div>
    </div>
  )
}

export default Testimony


import React from 'react'
import testi1 from '../assets/testi1.png';
import avat from '../assets/avat.png';

const Testimony = () => {
  return (
    <div className='testimony_container'>
      <div className='row testimony_content'>
        <div className='testimony_left'>
          <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.
          </p>
          <div className='profile'>
            <img src={avat} className='testimony_img' alt='avatar'/>
            <p><span style={{color:'#F4511E'}}>Harry Wilson</span><br />Property Owner</p>
          </div>
        </div>

        <div className='testimony_right' style={{ 
          backgroundImage: `url(${testi1})`,
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'center',
         backgroundSize: 'cover',
         }}>
          
        </div>
      </div>
    </div>
  )
}

export default Testimony
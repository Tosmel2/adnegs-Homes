import React from 'react'
import ml1 from '../assets/ml1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDollarToSlot, faHouseUser, faLayerGroup, faSeedling, faShieldHalved, faMoneyCheck } from '@fortawesome/free-solid-svg-icons'


const data = [
  {iconUrl: 'icon1', text: 'Pay as Little as Posible!'},
  {iconUrl: 'icon2', text: 'Enjoy wisdom of community!'},
  {iconUrl: 'icon3', text: "Let's somebody else take care Landlord!"},
  {iconUrl: 'icon4', text: 'Enjoy peaceful Environment!'},
  {iconUrl: 'icon5', text: 'Stay Safe! Save Money!'},
  {iconUrl: 'icon6', text: 'Pay for what you use !'}
]

const About = () => {

  const icons = {
    'icon1': faCircleDollarToSlot,
    'icon2': faHouseUser,
    'icon3': faLayerGroup,
    'icon4': faSeedling,
    'icon5': faShieldHalved,
    'icon6': faMoneyCheck
  }

  return (
    <div className='about_container'>
      <div className='row'>
        <h1 className='pl-2 text-3xl font-bold'>minimum living cost takes care of everything</h1>

        <div className='about-box'>

          <div className="about-box-img">
            <img src={ml1} className='testimony_img' alt='ml1'/>
          </div>

          <div className="about-box-divs flex items-center">
            <div className="flex flex-wrap justify-between">
              {data.map((item, index) => (
                <div className="map_items-box py-8 px-4" key={index}>
                  <FontAwesomeIcon icon={icons[item.iconUrl]} size="xl" className="text-center my-icon"  />
                  <p className="font-bold text-start mt-5">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About


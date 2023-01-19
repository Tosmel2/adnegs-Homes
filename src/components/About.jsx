import React from 'react'
import ml1 from '../assets/ml1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLeaf, faCarrot, faGem, faUser, faAppleAlt } from '@fortawesome/free-solid-svg-icons'


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
    'icon1': faCoffee,
    'icon2': faLeaf,
    'icon3': faCarrot,
    'icon4': faGem,
    'icon5': faUser,
    'icon6': faAppleAlt
  }

  return (
    <div className='about_container'>
      <div className='row'>
        <h1 className='pl-2 text-2xl font-bold' style={{border:'2px solid red'}}>minimum living cost takes care of everything</h1>

        <div className='about-box'>

          <div className="about-box-img">
            <img src={ml1} className='testimony_img' alt='ml1'/>
          </div>

          <div className="about-box-divs flex items-center">
            <div className="flex flex-wrap justify-between">
              {data.map((item, index) => (
                <div className="map_items-box py-8 px-3" key={index} style={{width:'49%', boxShadow: '0px 12px 19px rgba(0, 0, 0, 0.15)'}}>
                  <FontAwesomeIcon icon={icons[item.iconUrl]} size="lg" className="text-center my-icon" color="red" />
                  <p className="font-bold text-start">{item.text}</p>
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


import React from 'react'
import './Hero.css'
import HB from './images/hb_disney.png'

const Hero = () => {
  return (
    <div className='wrap'>
    <div className="SWrap">
      <img src={HB} alt="halloween" />
      <p>Halloween with Disney+ is scary good. Haunts of every kind await!</p>
      <button>Stream Now</button>
    </div>
    </div>
  )
}

export default Hero

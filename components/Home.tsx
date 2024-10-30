"use client"

import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = () => {

  }

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>Trouve, reserve rapidement et facilement</h1>
      
        <p className='hero__subtitle'>
          Expérience de location simple et efficace
        </p>
      
        <CustomButton 
          title="Explorer les voitures"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/aventador.png" alt='hero'
          fill className='object-contain'/>
          <div className='hero__image-overlay'/>
        </div>
      </div>
    </div>
  )
}

export default Hero
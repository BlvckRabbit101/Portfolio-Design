import React from 'react'
import Button from '../../Components/Button'

const Hero = () => {
  return (
    <div className='w-full bg-background flex items-center justify-center'>
        <div className='w-[80%] flex flex-col justify-center items-start text-primary py-[100px] ' >
            <div className='font-medium text-[18px] font-mono mb-[0px]'>Hi, my name is</div>
            <div className='flex flex-col justify-center items-start text-[70px] mb-[30px] font-bold font-sans'>
                <div className=' text-[#ccd6f6] mb-0'>Brittany Chiang.</div>
                <div className=' text-[#8892b0]'>I build things for the web.</div>
            </div>
            <div className='text-[18px] text-[#8892b0] w-[600px] mb-[50px] font-sans font-normal'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</div>
            <Button title='Check out my course!' />
        </div>
    </div>
  )
}

export default Hero
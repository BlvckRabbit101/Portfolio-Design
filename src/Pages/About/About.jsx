import React from 'react'
import Title from '../../Components/Title'
import Me from '../../assets/images/me.jpg'

const About = () => {
  return (
    <div className='w-full bg-background flex flex-col items-center justify-center pb-[100px]'>
        <div className='flex flex-col items-center justify-start w-[70%]'>
          <div className='w-full flex justify-start items-center py-[20px]' >
            <Title no='01' name='About Me' />
          </div> 
          <div className='flex items-start justify-center gap-[50px]'> 
            <div className='w-[60%] flex flex-col items-start justify-start gap-[10px] text-[16px] text-[#8892b0] font-sans font-normal'>
              <div>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</div>

              <div>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</div>

              <div>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</div>

              <div>Here are a few technologies I’ve been working with recently:</div>
              
              <div className='flex justify-start items-start gap-[50px] ml-[20px]'>
                <ul className='list-disc text-[16px] text-[#8892b0] font-sans flex flex-col gap-[10px]'>
                  <li>JavaScript (ES6+)</li>
                  <li>React</li>
                  <li>Node.js</li>
                </ul>
                <ul className='list-disc text-[16px] text-[#8892b0] font-sans flex flex-col gap-[10px]'>
                  <li>TypeScript</li>
                  <li>Eleventy</li>
                  <li>WordPress</li>
                </ul>
              </div>
            </div>
            <div className='w-[50%] relative'>
              <div className='w-[300px] h-[300px] border-2 border-white rounded translate-x-[15px] translate-y-[15px] hover:translate-x-[20px] hover:translate-y-[20px] hover:duration-300 absolute'></div>
              <img className='w-[300px] h-[300px] bg-white rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300  absolute object-contain' src={Me} alt="" />
              <div className='w-[300px] h-[300px] bg-[#0A192F] rounded absolute opacity-50 hover:opacity-5'></div>
              
            </div>
          </div>   
        </div>
    </div>
        
  )
}

export default About
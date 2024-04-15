import React from 'react'
import Title from '../../Components/Title'
import Halcyon from '../../assets/images/Halcyon.png'
import { RxExit } from "react-icons/rx";
import { FiGithub } from "react-icons/fi";

const Built = () => {
  return (
    <div className='w-full bg-background flex flex-col items-center justify-center pt-[100px] pb-[100px]'>
        <div className='flex flex-col items-center justify-start w-[80%]'>
          <div className='w-full flex justify-start items-center py-[20px] mb-[20px] ' >
            <Title no='03' name='Some Things I’ve Built' />
          </div>

          <div className='flex items-center justify-center relative mb-[200px] '>
            <div className='w-[60%] absolute left-1 top-1'>
              <img className='w-full rounded opacity-75 hover:opacity-100' src={Halcyon} alt="" />
            </div>
            <div className='w-[50%] flex flex-col items-end justify-start relative top-14 left-60 '>
              <div className='font-mono text-[14px] font-normal text-primary'>Featured Project</div>
              <div className='font-sans text-[28px] font-medium text-primary'>Halcyon Theme</div>
              <div className='text-[16px] text-[#8892b0] text-right font-sans font-medium my-[30px] py-[30px] px-[20px] bg-[#112240] rounded'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</div>
             <div className='flex items-center justify-end text-[#a8b2d1] text-[14px] font-medium gap-[20px] mb-[20px]'>
                <div>VS Code</div>
                <div>Sublime Text </div>
                <div>Atom</div>
                <div>iTerm2</div>
                <div>Hyper</div>
              </div>
              <div className='flex items-center justify-end text-primary text-[20px] font-medium gap-[20px]'>
                <RxExit className='cursor-pointer' />
                <FiGithub className='cursor-pointer' />
              </div>
            </div>
          </div>

          
          <div className='flex flex-row-reverse items-center justify-center relative '>
            <div className='w-[60%] absolute left-1 top-1'>
              <img className='w-full rounded opacity-75 hover:opacity-100' src={Halcyon} alt="" />
            </div>
            <div className='w-[50%] flex flex-col items-end justify-start relative top-14 left-60 '>
              <div className='font-mono text-[14px] font-normal text-primary'>Featured Project</div>
              <div className='font-sans text-[28px] font-medium text-primary'>Spotify Profile</div>
              <div className='text-[16px] text-[#8892b0] text-right font-sans font-medium my-[30px] py-[30px] px-[20px] bg-[#112240] rounded'>A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</div>
             <div className='flex items-center justify-end text-[#a8b2d1] text-[14px] font-medium gap-[20px] mb-[20px]'>
                <div>React</div>
                <div>Styled Components </div>
                <div>Express</div>
                <div>Spotify API</div>
                <div>Heroku</div>
              </div>
              <div className='flex items-center justify-end text-primary text-[20px] font-medium gap-[20px]'>
                <RxExit className='cursor-pointer' />
                <FiGithub className='cursor-pointer' />
              </div>
            </div>
          </div>


        </div>
    </div>    
  )
}

export default Built
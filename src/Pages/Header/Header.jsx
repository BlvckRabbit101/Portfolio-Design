import React from 'react'
import Button from '../../Components/Button'
import Logo from '../../Components/Header/Logo'

const Header = () => {
  return (
    <>
    <div className='w-full bg-background flex items-center justify-center'>
        <div className='w-[90%] flex justify-between items-center text-primary h-[70px]'>
            <Logo title='P'/>
            <div className='flex items-center justify-between w-[43%] text-[14px] font-semibold font-mono'>
                <div className='cursor-pointer'>01. About</div>
                <div className='cursor-pointer'>02. Experience</div>
                <div className='cursor-pointer'>03. Work</div>
                <div className='cursor-pointer'>04. Contact</div>
                <Button title='Resume' />
            </div>
        </div>
    </div>
    </>
  )
}

export default Header
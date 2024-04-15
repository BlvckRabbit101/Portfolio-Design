import React from 'react'

const Title = (props) => {
  return (
    <div  className='flex items-center justify-start w-full gap-[10px]'>
        <div className='flex items-end justify-start gap-[10px]'>
          <div className='font-mono text-[22px] text-primary'>{props.no}.</div>
          <div className='font-sans text-[28px] font-bold text-primary'>{props.name}</div>
        </div>
        <hr className='w-[300px] border-[#233554]'/>
    </div>
  )
}

export default Title
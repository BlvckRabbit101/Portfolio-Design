import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='border-[1px] border-solid border-fontColor font-mono py-2 px-5 rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 hover:shadow-[3px_3px_0px_0px_rgba(100,255,218)]'>{props.title}</button>
    </div>
  )
}

export default Button
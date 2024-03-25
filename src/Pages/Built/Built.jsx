import React from 'react'
import Title from '../../Components/Title'

const Built = () => {
  return (
    <div className='w-full bg-background flex flex-col items-center justify-center pt-[100px] pb-[100px]'>
        <div className='flex flex-col items-center justify-start w-[80%]'>
          <div className='w-full flex justify-start items-center py-[20px] bg-blue-500 ' >
            <Title no='03' name='Some Things I’ve Built' />
          </div>
        </div>
    </div>    
  )
}

export default Built
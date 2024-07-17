import React, { useState } from 'react'
import AnalogClock from '../components/AnalogClock'
import Sidebar from '../components/Sidebar'
import Quote from '../components/Quote'

export default function Tracking() {

  return (
    <div className='flex flex-col md:flex-row'>
      <Sidebar />
      <div className='w-full h-[100vh] flex flex-col md:justify-center '>
        <div className='px-3 mt-5 flex justify-center h-[30vh] font-semibold text-center'>
          <Quote />
        </div>
        <div className='flex flex-col justify-center items-center h-[70vh]'>
          <AnalogClock />
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import AnalogClock from '../components/AnalogClock'
import Sidebar from '../components/Sidebar'
import Quote from '../components/Quote'

export default function Tracking() {

  return (
    <div className='flex flex-col md:flex-row'>
      <Sidebar />
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <AnalogClock />
        <div className='mb-40 p-3'>
          <Quote />
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import AnalogClock from '../components/AnalogClock'

export default function Tracking() {

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
      <AnalogClock />
    </div>
  )
}

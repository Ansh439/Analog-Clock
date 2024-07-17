import React from 'react'
import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import { FaShareAlt } from "react-icons/fa";
import 'react-clock/dist/Clock.css';



export default function AnalogClock() {

  const [speed, setSpeed] = useState(1000);
  const [time, setTime] = useState(new Date());
  const [targetTime, setTargetTime] = useState(new Date());

  useEffect(() => {
    try {
      const queryParams = new URLSearchParams(window.location.search);
      const state = queryParams.get('state');
      if (state) {
        const { speed } = JSON.parse(atob(state));
        setSpeed(speed);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  

  useEffect(() => {
    setTargetTime(new Date(new Date().getTime() - 120 * 60 * 1000));
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(prevTime => {
        const newTime = new Date(prevTime.getTime() - 1000);
        if (newTime <= targetTime) {
          clearInterval(id);
          return targetTime;
        }
        return newTime;
      });
    }, speed);

    return () => clearInterval(id); 
  }, [speed, targetTime]);


  const handleChange = (event) => {
    setSpeed(Number(event.target.value));
  };

  const handleClick = (e) => {
    try {
      const state = btoa(JSON.stringify({speed}));
      const shareableURL = `${window.location.origin}/tracking?state=${state}`;
      navigator.clipboard.writeText(shareableURL)
      .then(() => alert('URL copied to clipboard!'))
      .catch((err) => console.error('Failed to copy URL:', err));
    } catch (error) {
      console.log(error);
    }
  }

  return (
      <div className='flex flex-col lg:flex-row justify-center items-center text-center gap-8'>
        <Clock value={time} size={'20rem'} className={"hover:rotate-[360deg] duration-300"} renderNumbers={true}/>
        <div>
          <p>Current Time: {time.toLocaleTimeString()}</p>
          <p>Target Time: {targetTime.toLocaleTimeString()}</p>
          <p>Update Interval: {speed} milliseconds</p>
          <input
            type="range"
            min="100"
            max="5000"
            step="100"
            value={speed}
            onChange={handleChange}
            className='w-full h-2 bg-[#4C2A00] rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
          />
        </div>
        <div>
          <button className='border p-4 rounded-full bg-[#FEE8CC] hover:border-[#FE8C00] hover:shadow-xl' onClick={handleClick}><FaShareAlt /></button>
        </div>
      </div>
  );

}

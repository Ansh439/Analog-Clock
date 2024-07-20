import React from 'react'
import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import { FaShareAlt } from "react-icons/fa";
import 'react-clock/dist/Clock.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeSpeed } from '../redux/user/userSlice';
import Slider from './Slider';



export default function AnalogClock() {

  const dispatch = useDispatch();
  const {speed} = useSelector(state => state.user);
  const [time, setTime] = useState(new Date());
  const [targetTime, setTargetTime] = useState(new Date());

  useEffect(() => {
    try {
      const queryParams = new URLSearchParams(window.location.search);
      const state = queryParams.get('state');
      if (state) {
        const { speed } = JSON.parse(atob(state));
        dispatch(changeSpeed(speed));
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
          alert('Clock time is ended... refresh the page to start again')
          return targetTime;
        }
        return newTime;
      });
    }, speed);

    return () => clearInterval(id); 
  }, [speed, targetTime]);


  

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
      <div className='flex flex-col gap-8 md:gap-12'>
        <div className='flex flex-col lg:flex-row justify-center items-center text-center gap-8'>
          <Clock value={time} size={'20rem'} className={"hover:rotate-[360deg] duration-300"} renderNumbers={true}/>
          <div className='inter-f5'>
            <p className='font-semibold hover:underline cursor-pointer'>Current Time: <span className='font-normal'>{time.toLocaleTimeString()}</span></p>
            <p className='font-semibold hover:underline cursor-pointer '>Target Time: <span className='font-normal'>{targetTime.toLocaleTimeString()}</span></p>
            <p className='font-semibold hover:underline cursor-pointer '>Update Interval: <span className='font-normal'>{speed} milliseconds</span></p>
            
          </div>
          <div>
            <button className='border p-4 rounded-full bg-[#FEE8CC] hover:border-[#FE8C00] hover:shadow-xl' onClick={handleClick}><FaShareAlt /></button>
          </div>
        </div>
        
          <Slider />
        
      </div>
  );

}

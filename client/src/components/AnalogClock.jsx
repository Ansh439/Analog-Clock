import React from 'react'
import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

export default function AnalogClock() {

  const [interval, setIntervalValue] = useState(1000);
  const [time, setTime] = useState(new Date());
  const [targetTime, setTargetTime] = useState(new Date());


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
    }, interval);

    return () => clearInterval(id); 
  }, [interval, targetTime]);


  const handleChange = (event) => {
    setIntervalValue(Number(event.target.value));
  };

  return (
    <div className='flex flex-col justify-center items-center gap-8'>
      <Clock value={time} size={'26rem'} />
      <div>
        <p>Current Time: {time.toLocaleTimeString()}</p>
        <p>Target Time: {targetTime.toLocaleTimeString()}</p>
        <p>Update Interval: {interval} milliseconds</p>
        <input
          type="range"
          min="100"
          max="5000"
          step="100"
          value={interval}
          onChange={handleChange}
        />
      </div>
    </div>
  );

}

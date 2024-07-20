import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeSpeed } from '../redux/user/userSlice';

export default function Slider() {
    const dispatch = useDispatch();
    const {speed} = useSelector(state => state.user);
    const handleChange = (event) => {
        dispatch(changeSpeed(Number(event.target.value)));
      };
  return (
    <input
        type="range"
        min="100"
        max="5000"
        step="100"
        value={speed}
        onChange={handleChange}
        className='w-full h-2 bg-[#4C2A00] rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
    />
  )
}

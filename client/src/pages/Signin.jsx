import React from 'react'
import { FcGoogle } from "react-icons/fc";

export default function Signin() {
  return (
    <>
        <div className='flex flex-col w-[327px] h-[128px] mt-[76px] md:mt-12 gap-2 mx-auto'>
            <h1 className=' inter-f6 w-full h-[80px]'>Login to your account.</h1>
            <span className='inter-f5 w-full h-[40px]' style={{color:'#878787'}}>Please sign in to your account </span>
        
        <form className=' mt-8 inter-f5 w-full flex flex-col gap-2'>
            <div className='flex flex-col gap-2 w-full'>
                <label className='h-[20px]'  style={{color:'#101010'}}>Email Address</label>
                <input 
                    className='border rounded-lg w-full h-[52px] p-4' 
                    style={{borderColor:"#D6D6D6"}}
                    placeholder='enter email...'
                />
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <label className='h-[20px]'  style={{color:'#101010'}}>Password</label>
                <input 
                    className='border rounded-lg w-full h-[52px] p-4' 
                    style={{borderColor:"#D6D6D6"}}
                    placeholder='enter password...'
                />
            </div>
        </form>
        <div class="flex justify-end mt-[14px]">
            <span style={{color:'#FE8C00'}}>Forgot password?</span>        
        </div>

        <button className='w-full h-[52px] mt-6 md:mt-3 rounded-[100px] p-4 text-white' style={{backgroundColor:'#FE8C00'}}>Sign in</button>

        <div class="relative flex py-5 items-center">
            <div class="flex-grow border" style={{color:'#878787'}}></div>
            <span class="flex-shrink mx-4 inter-f5" style={{color:'#878787'}}>Or sign in with</span>
            <div class="flex-grow border-t" style={{color:'#878787'}}></div>
        </div>

        <div className='w-full'>
            <div className='h-[40px] w-[40px] mx-auto flex items-center justify-center border-2 rounded-[50%]'>
                <FcGoogle size={'24px'} />
            </div>
        </div>

        <div className='w-full mt-6'>
            <h2 className='inter-f5 h-[24px] text-center'>Don't have an account? <span className='inter-f6' style={{fontSize:'14px', lineHeight:'20px',color:'#FE8C00'}}>Register</span></h2>
        </div>

        </div>
    </>
  )
}

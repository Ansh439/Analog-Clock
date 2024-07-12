import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function Signin() {
    const [formData, setFormData] = useState({});
    const [errMessage, setErrMessage] = useState(null);
    const [loading, setloading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!formData.email || !formData.password){
          setErrMessage("Please fill out all the fields");
        }

        try {
            setloading(true);
            setErrMessage(null);
            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(formData)
            })

            const data = await res.json();
            if(data.success === false){
                return setErrMessage(data.message);
            }
            setloading(false);
            if(res.ok){
                navigate('/');
            }

        } catch (error) {
            setErrMessage(data.message);
            setloading(false);
        }
    }
  return (
    <>
        <div className='flex flex-col w-[327px] h-[128px] mt-[76px] md:mt-12 gap-2 mx-auto'>
            <h1 className=' inter-f6 w-full h-[80px]'>Login to your account.</h1>
            <span className='inter-f5 w-full h-[40px]' style={{color:'#878787'}}>Please sign in to your account </span>
        
        <form className=' mt-8 inter-f5 w-full flex flex-col gap-2' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-2 w-full'>
                <label className='h-[20px]'  style={{color:'#101010'}}>Email Address</label>
                <input 
                    type='email'
                    className='border rounded-lg w-full h-[52px] p-4' 
                    style={{borderColor:"#D6D6D6"}}
                    placeholder='enter email...'
                    onChange={handleChange}
                    id='email'
                />
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <label className='h-[20px]'  style={{color:'#101010'}}>Password</label>
                <input 
                    type='password'
                    className='border rounded-lg w-full h-[52px] p-4' 
                    style={{borderColor:"#D6D6D6"}}
                    placeholder='enter password...'
                    onChange={handleChange}
                    id='password'
                />
            </div>
        <div className="flex justify-end mt-[14px]">
            <span style={{color:'#FE8C00'}}>Forgot password?</span>        
        </div>

        <button className='w-full h-[52px] mt-6 md:mt-3 rounded-[100px] p-4 text-white' style={{backgroundColor:'#FE8C00'}} type='submit' disabled={loading}>
            {
                loading ? (
                  'Loading...'                    
                ) : 'Sign In'
              }
        </button>
        </form>

        <div className="relative flex py-5 items-center">
            <div className="flex-grow border" style={{color:'#878787'}}></div>
            <span className="flex-shrink mx-4 inter-f5" style={{color:'#878787'}}>Or sign in with</span>
            <div className="flex-grow border-t" style={{color:'#878787'}}></div>
        </div>

        <div className='w-full'>
            <div type='button' className='h-[40px] w-[40px] mx-auto flex items-center justify-center border-2 rounded-[50%]'>
              <OAuth />
            </div>
        </div>

        <div className='w-full mt-6'>
            <h2 className='inter-f5 h-[24px] text-center'>Don't have an account? <span className='inter-f6' style={{fontSize:'14px', lineHeight:'20px',color:'#FE8C00'}}>
              <Link to={'/signup'}>
                Register
              </Link>
            </span></h2>
        </div>

        </div>
    </>
  )
}

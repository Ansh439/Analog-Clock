import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, isLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value.trim()})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        isLoading(true)
        setErrorMessage(null)
        if(!formData.username || !formData.email || !formData.password){
            setErrorMessage("Please Fill out all the fields")
        }
        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(formData)
            })

            const data = await res.json();
            if(data.success === false){
                setErrorMessage(data.message)
            }
            isLoading(false)
            if(res.ok){
                navigate('/signin')
            }
        } catch (error) {
            setErrorMessage(error.message)
            isLoading(false)
        }
    }
    console.log(formData);
    return (
    <>
        <div className='flex flex-col w-[327px] h-[128px] mt-[76px] md:mt-12 gap-2 mx-auto'>
            <h1 className=' inter-f6 w-full h-[80px]'>Create your new account</h1>
            <span className='inter-f5 w-full h-[40px]' style={{color:'#878787'}}>Create an account to start looking for the food you like</span>
        
        <form className='inter-f5 w-full flex flex-col gap-2' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-2 w-full'>
                <label className='h-[20px]'  style={{color:'#101010'}}>Email Address</label>
                <input 
                    className='border rounded-lg w-full h-[52px] p-4' 
                    style={{borderColor:"#D6D6D6"}}
                    placeholder='enter email...'
                    type='email'
                    id='email'
                    onChange={handleChange}
                />
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <label className='h-[20px]'  style={{color:'#101010'}}>User Name</label>
                <input 
                    className='border rounded-lg w-full h-[52px] p-4' 
                    style={{borderColor:"#D6D6D6"}}
                    placeholder='enter username...'
                    type='text'
                    id='username'
                    onChange={handleChange}
                />
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <label className='h-[20px]'  style={{color:'#101010'}}>Password</label>
                <input 
                    className='border rounded-lg w-full h-[52px] p-4' 
                    style={{borderColor:"#D6D6D6"}}
                    placeholder='enter password...'
                    type='password'
                    id='password'
                    onChange={handleChange}
                />
            </div>
            <div className="flex items-center mt-[14px]">
                <input 
                    type="checkbox"
                    style={{accentColor:'#FE8C00'}}
                />
                <label className="ms-2 inter-f5">I Agree with <span className='inter-f6' style={{fontSize:'14px', lineHeight:'20px',color:'#FE8C00'}}>Terms of Service</span> and <span className='inter-f6' style={{fontSize:'14px', lineHeight:'20px',color:'#FE8C00'}}>Privacy Policy</span></label>
            </div>
            <button type='submit' className='w-full h-[52px] mt-6 md:mt-3 rounded-[100px] p-4 text-white' style={{backgroundColor:'#FE8C00'}}
            disabled={loading}
            >{
                loading ? "Loading..." : "Register"
            }</button>
        </form>


        <div className="relative flex py-5 items-center">
            <div className="flex-grow border" style={{color:'#878787'}}></div>
            <span className="flex-shrink mx-4 inter-f5" style={{color:'#878787'}}>Or sign in with</span>
            <div className="flex-grow border-t" style={{color:'#878787'}}></div>
        </div>

        <div className='w-full'>
            <div className='h-[40px] w-[40px] mx-auto flex items-center justify-center border-2 rounded-[50%]'>
                <FcGoogle size={'24px'} />
            </div>
        </div>

        <div className='w-full mt-6'>
            <h2 className='inter-f5 h-[24px] text-center'>Have an account? <span className='inter-f6' style={{fontSize:'14px', lineHeight:'20px',color:'#FE8C00'}}><Link to={'/signin'}>Sign-in</Link></span></h2>
        </div>

        </div>
    </>
  )
}

import React from 'react'
import { FcGoogle } from "react-icons/fc";
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'
import { app } from '../firebase.js';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
    const navigate = useNavigate();
    const handleClick = async() => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({prompt: 'select_account'})

        const auth = getAuth(app);
        try{
            const resultsFromGoogle = await signInWithPopup(auth, provider);
            const res = await fetch('/api/auth/google', {
              method: 'POST',
              headers: {'Content-Type' : 'application/json'},
              body: JSON.stringify({
                name: resultsFromGoogle.user.displayName,
                email: resultsFromGoogle.user.email,
              }),
            })
    
            const data = await res.json();
    
            if(res.ok){
              navigate('/');
            }
          }catch(error){
            console.log(error);
          }
    }
  return (
    
    <button type='button' onClick={handleClick}>     
        <FcGoogle size={'24px'} />
    </button>
    
  )
}

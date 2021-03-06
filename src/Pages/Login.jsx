import React from 'react'
import { useRef, useState } from 'react'
import {  useAuth, login, provider, fireAuth } from './Firebase/firebase'
import { useNavigate } from "react-router-dom"
import "./auth.css"


const Login = () => {
    const navigate=useNavigate()
    const [loading,setLoading]=useState(false)
    const currentUser=useAuth()
    const emailRef=useRef()
    const passwordRef=useRef()

    const GoogleAuth = async(e) => {
        e.preventDefault();
        try {
            await fireAuth.signInWithPopup(provider);
            await navigate("/")
        } catch (error) {
            alert(error.message)
        }
    };

    const handleLogin=async()=>{
        try {
            setLoading(true)
            await login(emailRef.current.value,passwordRef.current.value)
            alert("Login Successful")
            navigate("/")

        } catch (error) {
            alert(error.message);
             navigate("/login")
        }
        setLoading(false)
    }

  return (
    <div className='box mt-5 container-fluid'>
        <div className="row">
            <div className="col pl-5 details">
                <p className='lead text'>Log in to your account</p>
                <p className='text-black text1 pb-4 '>Farfetch</p>
                <input className='mb-2 pl-5 pr-5 text-center border border-dark height' type="email"  ref={emailRef} placeholder='Email' />
                <br />
                <input className='mb-2 pl-5 pr-5 text-center border border-dark height' type="password" ref={passwordRef}placeholder='password'/>
                <br />
                <p className='text-black-50 pointer pb-2'><small>Forgot Password ?</small></p>
                <button className='btn btn-primary  button' disabled={loading || currentUser !==null} onClick={handleLogin}>Log In</button>
                <p className='text-black-50 pt-4 pb-4 or'>or</p>
                <div className="container-fluid logos">
                    <div className="row point-img">
                        <div className="col pointer"><img src="https://cdn.modesens.com/static/img/login-icon/20210617google.svg" alt="google" onClick={GoogleAuth} /></div>
                        <div className="col pointer"><img src="https://cdn.modesens.com/static/img/login-icon/20210617facebook.svg" alt="facebook" onClick={GoogleAuth}/></div>
                        <div className="col pointer"><img src="https://cdn.modesens.com/static/img/login-icon/20210617apple.svg" alt="apple-store" onClick={GoogleAuth}/></div>                    </div>
                </div>
                <p className='text-black-50 pt-3 pointer' onClick={()=>navigate("/signin")} ><u>Don't have an account? Please sign up.</u></p>
            </div>
        </div>
    </div>
  )
}

export default Login
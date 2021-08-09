import React, {useRef,useState} from 'react';
import {Alert} from 'react-bootstrap';
import './Login.css'
import { useHistory } from 'react-router-dom';
import { useAuth } from './../context/AuthContext';


function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {Login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] =  useState(false)
    const history = useHistory()

async function handleSubmit(e){
    e.preventDefault()

  
    try{
        setError('')
        setLoading(true)
      await  Login(emailRef.current.value, passwordRef.current.value)
      history.push('/dashboard')
    }
    catch{
        setError('Failed to sign in')
    }
    setLoading(false)
}



  return (
    <div class = "bg">
    <div class="center">
      <h1>Login</h1>
      {error && <Alert variant = "danger">{error}</Alert>}
      <form onSubmit = {handleSubmit}>
        <div class="txt_field">
          <input ref = {emailRef} type="email" required/>
          <span></span>
          <label>Email</label>
        </div>
        <div class="txt_field">
          <input ref = {passwordRef} type="password" required/>
          <span></span>
          <label>Password</label>
        </div>
        <div class="pass">.</div>
        <input type="submit" value="Login" disabled = {loading} />
        <div class="signup_link">
          Not a member? <a href="#">SignUp</a>
        </div> 
      </form>
    </div>
  </div>
  );
}
export default Login
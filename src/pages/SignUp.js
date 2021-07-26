import React, {useRef,useState} from 'react';
import {Alert} from 'react-bootstrap';
import './Login.css'
import { useHistory } from 'react-router-dom';
import { useAuth } from './../context/AuthContext';



function Register() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordconfirmRef = useRef()
    const {Signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] =  useState(false)
    const history = useHistory()

async function handleSubmit(e){
    e.preventDefault()

    if (passwordRef.current.value !== passwordconfirmRef.current.value){
        return setError('Passwords do not match')
    }
    try{
        setError('')
        setLoading(true)
      await  Signup(emailRef.current.value, passwordRef.current.value)
      history.push('/dashboard')
    }
    catch{
        setError('Failed to create an account')
    }
    setLoading(false)
}


  return (
    <div class = "bg">
    <div class="center">
      <h1>Register</h1>
      {error && <Alert variant = "danger">{error}</Alert>}
      <form onSubmit = {handleSubmit}>
        <div class="txt_field">
          <input ref = {emailRef} type="email" required/>
          <span></span>
          <label>Username</label>
        </div>
        <div class="txt_field">
          <input ref = {passwordRef} type="password" required/>
          <span></span>
          <label>Password</label>
        </div>

        <div class="txt_field">
          <input ref = {passwordconfirmRef} type="password" required/>
          <span></span>
          <label>Confirm Password</label>
        </div>
        <div class="pass">.</div>
        <input type="submit" value="Sign up" disabled = {loading} />
        <div class="signup_link">
        Already have an Account? Log In<a href="#">Signup</a>
        </div>
      </form>
    </div>
  </div>
  );
}
export default Register
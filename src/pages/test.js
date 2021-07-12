import React,{useRef} from 'react'
//import './SignIn.css'
import { auth } from '../Firebase';
const SignIn = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const SignUp = e =>{
      e.preventDefault();
      auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      ).then(user =>{
        console.log(user)
      }).catch(err =>{
        console.log(err)
      })
    }

    return(
      //Signin form
        <div className= "signin">
           <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input ref = {emailRef} type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input ref = {passwordRef} type="password" className="form-control" placeholder="Enter password" />
                </div>
                
                <button type="submit" className="btn btn-primary btn-block" onClick = {SignUp} >Login</button>
                
            </form>
         </div>  
    )
}
export default SignIn

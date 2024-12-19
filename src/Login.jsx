import React from 'react';
import './Login.css';
import {useGoogleLogin} from '@react-oauth/google'
import { googleAuth } from './api';
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();
  const responseGoogle = async (authResult)=>{
    try{
      if(authResult.code){
        const result = await googleAuth(authResult.code);
        const {email, name, image} = result.data.user;
        const token = result.data.token;
        console.log(token)
        const obj = {email,name, token, image};
				localStorage.setItem('user-info',JSON.stringify(obj));
				navigate('/dashboard');
      }
  
    }
    catch(err){
      console.log("error while google req code",err)
    }
  }
  const googlelogin= useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: 'auth-code'
  })
  return (
    <div className="app">
      <div className="login-box">
        <h1>Login into StackOverflow</h1>
        <button onClick={googlelogin} className="button">Continue with Google</button>
        <br />
        <br />
        <button className="button">Continue with Email</button>
        <br />
        <br />
        <button className="signupbutton">Don't have an account? Sign up</button>
      </div>
    </div>
  );
};

export default Login;

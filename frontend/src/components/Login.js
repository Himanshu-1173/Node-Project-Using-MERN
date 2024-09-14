import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const Login=()=>{
    const [email,setEmail]=React.useState("");
    const[password,setPassword]=React.useState("");
    const Navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem("user")
        if(auth){
            Navigate("/")
        }
    })
    const handleLogin=async()=>{
    console.warn(email,password);
    let result =await fetch("http://127.0.0.1:5000/Login",{
    method:"post",
    body:JSON.stringify({email,password}),
    headers:
    {
        'Content-Type':"application/json"
    },
});
    result=await result.json();
    console.warn(result);
    if(result.auth){
    localStorage.setItem("user",JSON.stringify(result.user));
    localStorage.setItem("token",JSON.stringify(result.auth));

    Navigate('/');
    }
    else{
        alert("Please enter correct details");
    }
       setEmail("");
       setPassword("");
}

    return(
        <div className='login'>
            <h1>Login</h1>
            <input className="inputBox" type="email" placeholder='Enter your email'
            value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <input className="inputBox" type="Password" placeholder='Enter your password' 
            value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className='signUpButton' type='button' onClick={handleLogin}>Login</button>

        </div>
    )
}
export default Login;
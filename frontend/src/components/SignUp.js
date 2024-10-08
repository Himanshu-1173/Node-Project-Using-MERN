import React,{ useState, useEffect } from 'react';
import { useNavigate, } from 'react-router-dom';
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/Login");
    }
  });

  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:5000/Signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    navigate("/Login");
  };

  return (
    <div className="signUp">
      <h1>Register</h1>
      <input className="inputBox" type="text" value={name}
        onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/>

      <input className="inputBox" type="email" value={email}
        onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address"/>

      <input
        className="inputBox" type="password" value={password}
        onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password"/>

      <button type="button" className="signUpButton" onClick={collectData}>Sign up</button>
    </div>
  );
};
export default SignUp;
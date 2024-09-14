import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav=()=>{
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        console.warn("logout");
        navigate('/SignUp');
    }

return (
  <div>
    <img src='https://i.pinimg.com/564x/0f/a9/3a/0fa93afa52d3eac0b71135c0b493112b.jpg' alt="RCB" className='logo-img'
     width={75}/>
    {auth ? (
      <ul className="nav-ul">
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/Add">Add Product</Link>
        </li>
        <li>
          <Link to="/Update">Update Product</Link>
        </li>
        {/* <li>
          <Link to="/Profile">Profile</Link>
        </li> */}
        <li>
          <Link onClick={logout} to="/SignUp">
          Log-out ({JSON.parse(auth).name})
          </Link>
        </li>
      </ul>
    ) : (
      <ul className="nav-ul nav-right">
        <li>
          <Link to="/SignUp">SignUp</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    )}
  </div>
);
}

export default Nav;
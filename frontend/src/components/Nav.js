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

return(
    <div>
        <ul className='nav-ul'>
            <li><Link to='/'>Products</Link></li>
            <li><Link to='/Add'>Add Product</Link></li>
            <li><Link to='/Update'>Update Product</Link></li>
            <li><Link to='/Profile'>Profile</Link></li>
            <li>{auth?<Link onClick={logout} to='/SignUp'>Log-out</Link>:<Link to='/SignUp'>SignUp</Link>}</li>
            
        </ul>
    </div>

)
}

export default Nav;
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UpdateProduct=()=>{
    const [name,setName]=React.useState("");
    const [price,setPrice]=React.useState("");
    const [category,setCategory]=React.useState("");
    const [company,setCompany]=React.useState("");
    const params=useParams();
    const Navigate=useNavigate();

    useEffect(()=>{
        getProductDetails();

    },[])

const getProductDetails=async()=>{
    let result=await fetch(`http://127.0.0.1:5000/product/${params.id}`);
    result=await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
}  

    const updateProductdata=async()=>{
        let result = await fetch(`http://127.0.0.1:5000/product/${params.id}`,{
            method:"put",
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':"application/json"
            },
        });
        result=await result.json();
        console.warn(result);

        Navigate('/');
    }
     

    return(
        <div className='AddProduct' >
            <h1>Update Product</h1>
            <input type="text" className='inputBox' placeholder='Enter product name'
            value={name} onChange={(e)=>{setName(e.target.value)}} />
            

            <input type="text" className='inputBox' placeholder='Enter product price' 
            value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
        

            <input type="text" className='inputBox' placeholder='Enter product category' 
            value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
            
            <input type="text" className='inputBox' placeholder='Enter company name' 
            value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
        

            <button type='button' className='AddButton' onClick={updateProductdata} >Update Product</button>

        </div>
    )
}

export default UpdateProduct;
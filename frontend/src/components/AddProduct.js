import React from 'react';

const AddProduct=()=>{
    const [name,setName]=React.useState("");
    const [price,setPrice]=React.useState("");
    const [category,setCategory]=React.useState("");
    const [company,setCompany]=React.useState("");
    const [error,setError]=React.useState(false)

    const addProductdata=async()=>{
        
        console.warn(name,price,category,company);
        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }



        const userId=JSON.parse(localStorage.getItem('user'))._id;
       let result =await fetch("http://127.0.0.1:5000/Add-product",{
            method:"post",
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json",
            },
        });
      result=await result.json();
        console.warn(result);

        setCategory('');
        setName('');
        setPrice('');
        setCompany('');
    };

    return(
        <div className='AddProduct' >
            <h1>Add Product</h1>
            <input type="text" className='inputBox' placeholder='Enter product name'
            value={name} onChange={(e)=>{setName(e.target.value)}} />
            {error && !name &&<span className='error-msg'>Error! Please enter your name</span>}

            <input type="text" className='inputBox' placeholder='Enter product price' 
            value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            {error && !price && <span className='error-msg'>Error! Please enter price</span>}

            <input type="text" className='inputBox' placeholder='Enter product category' 
            value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
            {error && !category && <span className='error-msg'>Error! Please enter category</span>}

            <input type="text" className='inputBox' placeholder='Enter company name' 
            value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
            {error && !company && <span className='error-msg'>Error! Please enter company name</span>}<br/>

            <button type='button' className='AddButton' onClick={addProductdata} >Add Product</button>

        </div>
    )
};
export default AddProduct;
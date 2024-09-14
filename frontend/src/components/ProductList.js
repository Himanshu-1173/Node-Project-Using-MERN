import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const ProductList = () => {
  let [products, setProducts] = useState([]);
  useEffect(() => {
      getProducts();
    },
    []);
  let getProducts = async () => {
    let result = await fetch("http://127.0.0.1:5000/products",{
      headers:{
        authentication:JSON.parse(localStorage.getItem("token"))
      }
    });
    result = await result.json();
    setProducts(result);
  }

const deleteProduct=async(id)=>{
let result=await fetch(`http://127.0.0.1:5000/product/${id}`,{
  method:"delete"
});
result=await result.json();
if(result){
  alert("record is deleted");
  getProducts();
}
};
const searchHandle =async(event)=>{
  let key=event.target.value;
  if(key){
    let result=await fetch(`http://127.0.0.1:5000/Search/${key}`);
    result=await result.json();
    if(result){
      setProducts(result);
    }
  }
  else{
    getProducts();
  }

 };

  return (
    <div className='Products'>
      <h1>Products</h1>
      <input type="text" placeholder='Search product' className='SearchInput' 
      onChange={searchHandle}/>
      <ul>
        <li>S.NO</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company name</li>
        <li>Operation</li>
        </ul>
       {
        products.length>0 ? products.map((item, index) => (
        <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>{item.price}₹</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li ><button type='link'className='deleteButton' onClick={()=>deleteProduct(item._id)}>Delete</button>
            <Link className='updatelink' to ={"/Update/"+item._id}>Update</Link></li>
        </ul>)):
        <div className='Search-result'>
        <h1>No Product Found</h1>
        </div>}

    </div>
  );
};
export default ProductList;
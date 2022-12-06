import React from 'react';
import {useState, useEffect} from "react"
import axios from "axios";
import './products.css';
import Product from './product';
import { productItems } from './Api';
import {useNavigate} from "react-router-dom"



const Products = () => {

  const navigate = useNavigate();
 
  const[popular,setPopular]= useState([]);
  
   useEffect( ()=>{
   getPopular();
   },[]);
  const getPopular =async() =>{
  
     let response1 = await productItems();
    console.log("products response",response1);
    let   data1 = response1.data;
    setPopular(data1)   
     console.log("products data", response1.data);
      console.log("id",data1[1]._id);


  }


  return(
    <div className='tvShows'>
    
      <h1>data to be displayed on the page</h1>
      <div className='popular'>
              {popular && popular.map((item)=>{
            return <div  className='populartv containerimg' key={item._id} >
               
                <img src={item.image} alt="Post banner" onClick={()=> navigate(`/products/${item._id}`)} />
                <h3>{item.title}</h3>
                <p>Price : {item.price}$</p>
              </div>
       })}
       </div>
           
    </div>
  )
}
	

export default Products;

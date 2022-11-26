import React from 'react'
import './products.css';
import { productItems } from './Api';
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"

function Jewelery() {
    
    const[jeweleryProducts,setJeweleryProducts]= useState([]);
    const navigate = useNavigate();
    useEffect( ()=>{
        getJewelery();
       },[]);

      
  const getJewelery=async() =>{
  
    let response1 = await productItems();
   console.log("products response",response1);
   let   data1 = response1.data;
            setJeweleryProducts(data1)
    }
  return (
             <div>
              <div className='popular'>
              { jeweleryProducts && jeweleryProducts.map((item)=>{  if(item.category == "jewelery")
            {return <div  className='populartv containerimg' key={item.id} >
              
                <img src={item.image} alt="Post banner" onClick={()=> navigate(`/products/${item._id}`)}/>
         
                <h3>{item.title}</h3>
                <p>Price : {item.price}$</p>
                </div>
            }
       })}
       </div>
    </div>
  )
}

export default Jewelery
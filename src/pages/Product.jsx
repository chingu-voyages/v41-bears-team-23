import React from 'react';
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import  { useState , useEffect} from 'react';
import {useParams} from "react-router-dom";

import { productItems } from './Api';
import './product.css';
const Product = () => {

	   const {id} = useParams();
	   const[singleProduct, setSingleProduct]= useState([]);


   
  

	   useEffect( ()=>{
        getProduct();
       },[id]);

      
  const getProduct=async() =>{
  
    let response1 = await productItems();
   console.log("products response",response1);
   let   data1 = response1.data;
            setSingleProduct(data1)
    }



	return ( 
	<div>
             
               
           
              {  singleProduct.map((item)=>{  if(item._id == id){

            return (
            <div  className='image-container' key={item._id} >
                     
                <img src={item.image} alt="Post banner" className='product-detail-image'/>
               
                
              
                <div className='product-detail-desc'>
                     <h1>{item.title}</h1>
                    <h4>Details: </h4>
                     <p>{item.description}</p>
                     <p className='price'>Price : {item.price}$</p>
                        {/* <div className='quantity'>               
                               <h3>Quantity:</h3>
                                  <p className='quantity-desc'>
                                  <span className="minus"><AiOutlineMinus /></span>
                                  <span className="num"></span>
                                  <span className="plus"><AiOutlinePlus /></span>
                                  </p>
                        </div> */}
                    <div className="buttons">
                    <button type="button" className="add-to-cart" >Add to Cart</button>
                    <button type="button" className="buy-now" >Buy Now</button>
                    </div>

                </div>
           </div>)
                
            }
       })}
    </div>

	)
};

export default Product;

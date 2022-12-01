import React from 'react';
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import  { useState , useEffect} from 'react';
import {useParams} from "react-router-dom";
//import Cart from './Cart';
import {useCart} from "react-use-cart"

import { productItems } from './Api';
import './product.css';
import axios from 'axios';
const Product = (props) => {
  
    
 //const{addItem} = useCart();
      //const {addToCart} = props;

     //console.log("data from products" ,  props)
     
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


    const addToItem = async(item) =>{
      
          console.log("itemid", item);
          console.log("itemid id", item._id);
          const idcart = item._id;
          await axios.put(`https://voyage-server.onrender.com/api/v1/medic111111/cart/new/${idcart}`)
          .then((serverresponse)=>{
            console.log("serverdata",serverresponse.data)
            props.setCart((previous)=>{
                return [...previous , item];
            })
          }
          )
     .catch((error)=>{
        console.log(error)
     })
          

    }

    // const [cart, setCart] = useState([]);
    // const addToCart = (data) =>{   
    //   setCart([...cart , data])
    // }
  
    // console.log("cart added item", cart)

	return ( 
	<div>
             
              {/* <Cart cart={cart} />  */}
           
              {  singleProduct.map((item,index)=>{  if(item._id == id){

            return (
            <div  className='image-container' key={item._id} >
                     
                <img src={item.image} alt="Post banner" className='product-detail-image'/>
               
                
              
                <div className='product-detail-desc'>
                     <h1>{item.title}</h1>
                     <h4>Details: </h4>
                     <p>{item.description}</p>
                     <p className='price'>Price : $ {item.price}</p>
                    <div className="buttons">
                    <button type="button" className="add-to-cart" onClick={()=> addToItem(item)}>Add to Cart</button>
                    
                    </div>

                </div>
           </div>)
                
            }
       })}
    </div>

	)
};

export default Product;

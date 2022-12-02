import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import { BsCartCheck, BsCartX} from 'react-icons/bs';
import  { useState , useEffect} from 'react';
import {useCart} from "react-use-cart"
const Cart = (props) => {

	const {cart} = props;
	console.log("added item" , props )
	  
  return(
	<div>
              {  cart.map((item,index)=>{  

return (
<div  className='image-container' key={item._id} >
		 
	<img src={item.image} alt="Post banner" className='product-detail-image'/>
	<div className='product-detail-desc'>
		 <h1>{item.title}</h1>
		 <p className='price'>Price : $ {item.price}</p>
		</div>

	</div>
)
	
}
)}
	</div>
  )
};

export default Cart;

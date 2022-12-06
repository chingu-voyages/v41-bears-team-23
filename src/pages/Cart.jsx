
import { useEffect, useState } from 'react';
import "./cart.css";
import axios from "axios";
import {useNavigate} from "react-router-dom"


function Cart({ cart ,setCart,user}) {

    const navigate = useNavigate();
	console.log("deletdcarqtnumber", cart);



	const DeleteItem = async(cartItem)=> {

        const deleteitem = cartItem._id;
        console.log("deelteitemid", cartItem._id);
        await axios.put(`https://voyage-server-xk0b.onrender.com/api/v1/${user.username}/cart/remove/${deleteitem}`)
		.then((serverresponse)=>{
			
               console.log("deleteserverresponse", serverresponse.data);
	
		
			
			setCart((prev)=>{
				let filteredCart = prev.filter((item)=>{
				  return item._id !== deleteitem
				})
				return filteredCart;

			  }
			
			  )
			
		})
		.catch((e)=>{
			console.log(e)
		})
    }









    return (
        <div className="main-container">
            {
                cart?.map((cartItem, cartindex) => {
                    return (
                        <div className='cart-container'>
                            <img src={cartItem.image}  />
                            <span className='title'> {cartItem.title} </span>
							<p>${cartItem.price}</p>
							<button className='deletebtn' onClick={()=> DeleteItem(cartItem)}>Delete</button>
                           
                        </div>
                    )
                })
            }
            <div className='line'>


            </div>
            <div className="cart"> 
            <h4>Total products : {cart.length}</h4>

            <h4 className='cartamount'> Total Amount : ${ cart.reduce((acc, item) => {
    return acc += item.price;
}, 0)} </h4>
</div>
	   <div>
        <button className='buybtn' onClick={()=> navigate('/stripe')}> Proceed to buy</button>
        </div>	
        </div >
    )
}

export default Cart;

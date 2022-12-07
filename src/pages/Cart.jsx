
import { useEffect, useState } from 'react';
import "./cart.css";
import axios, { AxiosHeaders } from "axios";
import {useNavigate} from "react-router-dom"


function Cart({ cart ,setCart,user}) {

    const navigate = useNavigate();
	
       
    const [disabled, setDisabled] = useState(false);
    
    const [style, setStyle] = useState("buybtn");
    const [empty,setEmpty] = useState("Your Cart")



	const DeleteItem = async(cartItem)=> {

        const deleteitem = cartItem._id;
        //console.log("deelteitemid", cartItem._id);
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
      const emptyCart =async()=>{

        await axios.put(`https://voyage-server-xk0b.onrender.com/api/v1/${user.username}/cart/checkout`)
      
        .then((serverresponse)=>{
            console.log("deleteserverresponse", serverresponse.data);
                setCart('')
      })
    
      .catch((e)=>{
        console.log(e)
    })
    
    }


    const disablebtn = ()=>{
       
        if(cart.length ==0) {
            
        setDisabled(true)
        setStyle("disable-button1")
        setEmpty("Add Items to your cart")
        
        }else{
        setDisabled(false)
        setStyle("buybtn")
        }

    }


    useEffect(()=>{
        disablebtn();
       },[])


    return (
        <div className="main-container">
            <h1 className="emptymsg">{empty}</h1>
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
            <h2>Total products : {cart.length} </h2>

            <h2 className='cartamount'> Total Amount : ${ parseFloat((cart.reduce((acc, item) => { return acc += item.price;}, 0)).toFixed(2))} </h2>
</div>
	   
        <button className='buybtn' disabled={disabled} onClick={()=> {navigate('/stripe'); emptyCart()}}> Proceed to buy</button>
        
        </div >
    )
}

export default Cart;

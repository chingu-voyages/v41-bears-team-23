import React from 'react'
import './products.css';
import { productItems } from './Api';
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"




const Mens = () => {
    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();
    
    useEffect( () => { 
        async function fetchData() {
            try {
                const res = await productItems();
                const data1 = res.data;
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    return (<div>
          <div className='popular'>
             { posts.map((item)=>{ if(item.category == "men's clothing")
             {
           return <div  className='populartv containerimg' key={item._id} >
                             <img src={item.image} alt="Post banner" onClick={()=> navigate(`/products/${item._id}`)}/>
               
                <h3>{item.title}</h3>
               <p>Price : {item.price}$</p>
                </div>
             }
    
       })}
        </div>
    </div>)
}


export default Mens
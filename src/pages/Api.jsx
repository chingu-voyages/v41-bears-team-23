import React from 'react'
import axios from "axios";


export async function productItems(){

    const response= await axios.get(`https://voyage-server-xk0b.onrender.com/api/v1/products`)

return response;
}
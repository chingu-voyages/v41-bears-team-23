import React from 'react';
// import * as React from 'react';
import { useNavigate } from 'react-router-dom';

//import Icons from '../Icons'
import { QUERY_PRODUCTS } from '../../utils/queries';
import { useQuery } from '@apollo/client';

const Products = () => {




  const navigate = useNavigate();
  const navigateToNewPost = () => {
    navigate('/post');
  }


  const { data } = useQuery(QUERY_PRODUCTS);
  const posts = data?.products || [];
  console.log("posts", posts)


 

  return(
    <div>
        <p>here are all products</p>
    </div>
  )
}
	

export default Products;

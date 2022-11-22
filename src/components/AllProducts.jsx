import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../Icons'
import { QUERY_PRODUCTS } from '../../utils/queries';
import { useQuery } from '@apollo/client';

export default function Album() {

  const navigate = useNavigate();
  const navigateToNewPost = () => {
    navigate('/post');
  }


  const { data } = useQuery(QUERY_PRODUCTS);
  const posts = data?.products || [];

  // render category icon based on selected category name
  const getIcon = (category) => {
    console.log("category", category);
    var categoryList = Object.keys(Icons).filter(key => category.includes(key)) 
    if (categoryList.length === 0) {
      return "";
    };
    return Icons[categoryList[0]];
  };
 

  return(
    <div>
        
    </div>
  )
}
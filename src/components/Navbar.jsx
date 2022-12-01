

import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import {faShoppingCart , faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
 import './Navbar.css';
// import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile , ipad} from "../responsive";

import {  BiCart} from 'react-icons/bi';


import { useCart } from "react-use-cart";

const Container1 = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Line = styled.div`
outline: 1px solid 	#E0E0E0;
`

const Categories = styled.div`
display:flex;
margin-top:10px;
align-items: center;
justify-content:space-between;
margin-left:440px;
margin-right:440px;
color:#726E8D;
${ipad({
        })}
`

const Navbar = () => {
  
    const {
    isEmpty,
    totalItems,
    } = useCart();

  return (
	<div>
   <nav>
    <Container1>
      <Wrapper>
        <Left>
          {/* <SearchContainer>
            <Input placeholder="Search" />
            <FontAwesomeIcon icon={faMagnifyingGlass}  style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer> */}
        </Left>
        <Center>
        <NavLink to="/"> <Logo>Avion </Logo></NavLink> 
        </Center>
        <Right>
        <NavLink to="/signup"><MenuItem>REGISTER</MenuItem></NavLink>
        <NavLink to="/login"><MenuItem><FontAwesomeIcon icon={faUser} /></MenuItem></NavLink>
          <MenuItem >
          <NavLink
                to="/cart"
             
              > <sup style={{ position: 'relative', right: '-21px', top: '1px',fontSize:'15px'}}>{totalItems}</sup>
                <BiCart size="2.5rem" style={{ paddingBottom:'18px'}}/>
               
                {/* {!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px'}}>{totalItems}</span>} */}
                {/* <span style={{ marginLeft: !isEmpty ? '-13px': 0}}>&nbsp;Cart</span> */}
              </NavLink>
              {/* <NavLink to="/cart"> <FontAwesomeIcon icon={faShoppingCart} /></NavLink> */}
           
          </MenuItem>
        </Right>
      </Wrapper>
    </Container1>
	<Line></Line>
	<Categories>
  <NavLink to="/products">All Products</NavLink> 
	<NavLink to="/men">Mens</NavLink>
	<NavLink to="/women">Womens</NavLink>
	<NavLink to="/electronics">Electronics</NavLink>
	<NavLink to="/jewelery">Jewellery</NavLink>
	
	</Categories>
  </nav>
	</div>
  );
};

export default Navbar;

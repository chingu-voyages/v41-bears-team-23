// import React from 'react';
// import {NavLink
// } from "react-router-dom"

// const Navbar = () => {
// 	return <div>


//     <nav>
// 	<NavLink to={"/products"}>Products</NavLink>
//       <NavLink to={"/"}>Avion</NavLink>
    
//       <NavLink to={"/cart"}>Cart</NavLink>
// 	  <NavLink to={"/login"}>Login</NavLink>
//       <NavLink to={"/signup"}>Signup</NavLink>

//     </nav>



// 	</div>;
// };

// export default Navbar;

import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import {faShoppingCart , faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'


// import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
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
`

const Navbar = () => {
  return (
	<div>
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Search" />
            <FontAwesomeIcon icon={faMagnifyingGlass}  style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Avion </Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem><FontAwesomeIcon icon={faUser} /></MenuItem>
          <MenuItem>
            {/* <Badge badgeContent={4} color="primary"> */}
              {/* <ShoppingCartOutlined /> */}
			  <FontAwesomeIcon icon={faShoppingCart} />
            {/* </Badge> */}
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
	<Line></Line>
	<Categories>
	<a href="#">Mens</a>
	<a href="#">Womens</a>
	<a href="#">Electronics</a>
	<a href="#">Jewellery</a>
	
	</Categories>
	</div>
  );
};

export default Navbar;

import React from 'react';
import Slider from '../components/Slider';
import styled from "styled-components";
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCreditCardAlt, faSeedling, faShippingFast } from '@fortawesome/free-solid-svg-icons';




const Signup= styled.div`
text-align:center;
padding-botoom:20px;
`

const Brand= styled.div`
margin-top:60px
display:flex;
padding:60px;
height:335px;

`
const Content= styled.div`
padding-bottom: 20px;
`

const Wrapper= styled.div`
display:flex;
align-items:center;
`
const List =styled.div`
margin:10px;
background-color:Azure;
height:130px;

`

const Title = styled.h2`
  
  font-size: 30px;
  text-align:center;
  padding-bottom:15px;
`;

const Club = styled.div`

text-align:center;
color:white;

width: 100%;
height: 200px;
  background-image: url("https://www.pixelstalk.net/wp-content/uploads/images1/Free-furniture-wallpapers.jpg")
`
const Wrap = styled.div`
display:flex;
align-content:center;
justify-content:space-around;
padding-bottom:15px;
margin-right:30%;
margin-left:30%;

`


const Button = styled.button`

  width:100px;
  font-size: 15px;
  height:40px;
  background-color: #2A254B;
  border:1px solid black;
  cursor: pointer;
`;

const Input = styled.input.attrs({ 
	type: 'email'
  })`
  padding: 15px;
  width:300px;
  height:45px;
  font-size: 20px;
  border:1px solid black;
  cursor: pointer;
  `

  const Collection = styled.div`
  width:100%;
  height:598px;
  display:flex;
  align-content:center;
  justify-content:space-around;
  `
  const Img1 = styled.div`
   backround-image : url("https://3.bp.blogspot.com/-o1RwakGop8M/WhU1l6iPbII/AAAAAAAAHwA/AmG9Zy32o74XT2MfC4yJFmuF2-nc-JIngCHMYBhgL/s1600/dark-solid-purple-wallpaper-wallpapersafari.jpg")
   height:400px;
   width:630;
  `

  const SpanImg =styled.span`
  height:478px;
   width:630;
   backround-image : url("https://www.architectandinteriorsindia.com/public/images/2020/08/05/Fair-Ridge-Accent-Cabinet.jpg")
  `

  const Span = styled.span`
  font-size: 14px;
  cursor: pointer;
  height:400px;
  width:630;
  display:inline-block;
  backround-image : url("https://camillelavie.com/pub/media/wysiwyg/categories/thumbs/evening/ballgown_dress_0822.jpg")

`;
const Home = () => {
	return <div>

  <Slider />
  <Brand>
    <Title>What makes our brand different</Title>
	<Wrapper>
		<List>
		<FontAwesomeIcon icon={faShippingFast} />
		<h3>Next day as standard</h3>
		<p>Order before 3pm and get your order the next day as standard</p>
		</List>
		<List>
		<FontAwesomeIcon icon={faCheckSquare} />
		<h3>Made by true artisans</h3>
		<p>Handmade crafted goods made with real passion and craftmanship</p>
		</List>
		<List>
		<FontAwesomeIcon icon={faCreditCardAlt} />
		<h3>Unbeatable prices</h3>
		<p>For our materials and quality you won't find better prices anywhere</p>
		</List>
		<List>
		<FontAwesomeIcon icon={faSeedling} />
		<h3>Recycled Packing</h3>
		<p>We use 100% recycled packing to ensure our footprint is manageable</p>
		</List>
	</Wrapper>
  </Brand>

  <Club>
    <Title>Join the club and get the benefits</Title>
	<Content>
	<p>Signup for our newsletter and receive exclusive offers on </p>
    <p>      new ranges, sales, pop up stories and more    </p>
	</Content>
     <Wrap>
     <span> <FontAwesomeIcon icon={faCheckSquare} />Exclusive Offers  </span> 
      <span> <FontAwesomeIcon icon={faCheckSquare} />Free events   </span> 
	  <span> <FontAwesomeIcon icon={faCheckSquare} />Large Discounts  </span> 
	  </Wrap>
  </Club>

	</div>;
};

export default Home;

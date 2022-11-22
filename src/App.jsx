import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Cart from './pages/cart';
import Home from './pages/home';
import Login from './pages/Login';
import Product from './pages/product';
import Products from './pages/products';
import SignUp from './pages/SignUp';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from '../utils/globalstate';

const httpLink = createHttpLink({
	uri: "/graphql",
  });
  
  // With the configuration of authLink, we use the setContext() function to retrieve the token from localStorage and set the HTTP request headers of every request to include the token, whether the request needs it or not.
  const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('id_token');
	return {
	  headers: {
		...headers,
		authorization: token ? `Bearer ${token} `: '',
	  },
	};
  });
  
  const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
  });


function App() {
	const location = useLocation();
	const show =
		location.pathname === '/signup' || location.pathname === '/login';

	return (
	<>
		<ApolloProvider client={client}>
		<StoreProvider>
		
		  
			{!show && <Navbar />}
			
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/products/:id" element={<Product />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			
			{!show && <Footer />}
			

	
		</StoreProvider>
			</ApolloProvider>
			</>
	);
}

export default App;

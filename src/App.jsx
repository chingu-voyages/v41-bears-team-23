import React from 'react';
import {
	BrowserRouter,
	Route,
	Routes,
	useLocation,
	Navigate,
} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Cart from './pages/cart';
import Home from './pages/home';
import Login from './pages/Login';
import Product from './pages/product';
import Products from './pages/products';
import SignUp from './pages/SignUp';
import Mens from './pages/Mens';
import Women from './pages/Women';
import Electronics from './pages/Electronics';
import Jewelery from './pages/Jewelery';
import { useAuthContext } from './hooks/useAuthContext';
// import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import { StoreProvider } from '../utils/globalstate';

// const httpLink = createHttpLink({
// 	uri: "/graphql",
//   });

// With the configuration of authLink, we use the setContext() function to retrieve the token from localStorage and set the HTTP request headers of every request to include the token, whether the request needs it or not.
//   const authLink = setContext((_, { headers }) => {
// 	const token = localStorage.getItem('id_token');
// 	return {
// 	  headers: {
// 		...headers,
// 		authorization: token ? `Bearer ${token} `: '',
// 	  },
// 	};
//   });

//   const client = new ApolloClient({
// 	link: authLink.concat(httpLink),
// 	cache: new InMemoryCache(),
//   });

function App() {
	const { user } = useAuthContext();
	const location = useLocation();
	const show =
		location.pathname === '/signup' || location.pathname === '/login';

	return (
		<div>
			{/* <ApolloProvider client={client}>
		<StoreProvider>
		 */}

			{!show && <Navbar />}

			<Routes>
				<Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
				<Route
					path="/products"
					element={user ? <Products /> : <Navigate to="/login" />}
				/>
				<Route
					path="/products/:id"
					element={user ? <Product /> : <Navigate to="/login" />}
				/>
				<Route
					path="/men"
					element={user ? <Mens /> : <Navigate to="/login" />}
				/>
				<Route
					path="/women"
					element={user ? <Women /> : <Navigate to="/login" />}
				/>
				<Route
					path="/jewelery"
					element={user ? <Jewelery /> : <Navigate to="/login" />}
				/>
				<Route
					path="/electronics"
					element={user ? <Electronics /> : <Navigate to="/login" />}
				/>
				<Route
					path="/cart"
					element={user ? <Cart /> : <Navigate to="/login" />}
				/>
				<Route
					path="/login"
					element={!user ? <Login /> : <Navigate to="/" />}
				/>
				<Route
					path="/signup"
					element={!user ? <SignUp /> : <Navigate to="/" />}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>

			{!show && <Footer />}

			{/* 
	
		</StoreProvider>
			</ApolloProvider> */}
		</div>
	);
}

export default App;

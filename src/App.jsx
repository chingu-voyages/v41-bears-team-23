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
import { CartProvider } from 'react-use-cart';
import {useState, useEffect} from "react"


function App() {
	const { user } = useAuthContext();
	const location = useLocation();
	const show =
		location.pathname === '/signup' || location.pathname === '/login';
		const [cart, setCart] = useState([]);

	return (
			
		<div>
			{!show && <Navbar />}

			<Routes>
				<Route path="/" element={user ? <Home /> : <Navigate to="/signup" />} />
				<Route path="/products" element={<Products />} />
				<Route path="/products/:id" element={<Product setCart={setCart}/>} />
				<Route path="/men" element={<Mens />} />
				<Route path="/women" element={<Women />} />
				<Route path="/jewelery" element={<Jewelery />} />
				<Route path="/electronics" element={<Electronics />} />
				<Route path="/cart" element={<Cart  cart={cart}/>} />
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

			
		</div>
		
	);
}

export default App;

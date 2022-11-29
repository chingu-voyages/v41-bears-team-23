import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
	const {
		isEmpty,
		totalUniqueItems,
		items,
		totalItems,
		cartTotal,
		updateItemQuantity,
		removeItem,
		emptyCart,
		} = useCart();

		
	return <div>Cart</div>;
};

export default Cart;

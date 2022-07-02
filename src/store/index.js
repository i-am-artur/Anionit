import { configureStore } from '@reduxjs/toolkit';

import { default as shoppingCart } from './product-order/reducer';

const store = configureStore({
	reducer: {
		shoppingCart: shoppingCart,
	},
});

export default store;

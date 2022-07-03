import { configureStore } from '@reduxjs/toolkit';

import { default as shoppingCart } from './product-order/reducer';
import { default as states } from './animation/reducer';

const store = configureStore({
	reducer: {
		shoppingCart: shoppingCart,
		states: states,
	},
});

export default store;

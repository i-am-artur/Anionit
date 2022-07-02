import { QUANTITY_IS_SET, INITIALIZE_IS_DONE } from './actionTypes';

export function initializeStore(products) {
	return {
		type: INITIALIZE_IS_DONE,
		payload: products,
	};
}
export function setQuantity(productId, volume, quantity) {
	return {
		type: QUANTITY_IS_SET,
		payload: { productId, volume, quantity },
	};
}

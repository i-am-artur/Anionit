import { ERROR, INITIALIZE_IS_DONE, QUANTITY_IS_SET } from './actionTypes';
import produce from 'immer';

const initialState = [];

function reducer(state = initialState, action) {
	const payload = action?.payload;
	switch (action?.type) {
		case INITIALIZE_IS_DONE:
			return payload;
		case QUANTITY_IS_SET:
			return produce(state, (stateCopy) => {
				stateCopy
					.find((product) => product.id === payload.productId)
					.volumes.find((volume) => volume.value === payload.volume).quantity =
					payload.quantity;
			});
		case ERROR:
		default:
			return state;
	}
}

export default reducer;

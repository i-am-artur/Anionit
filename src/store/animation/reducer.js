import { ERROR, HOME_ANIMATION_IS_DONE } from './actionTypes';
import produce from 'immer';

const initialState = {
	isHomeAnimationDone: true,
};

function reducer(state = initialState, action) {
	const payload = action?.payload;
	switch (action?.type) {
		case HOME_ANIMATION_IS_DONE:
			return produce(state, (stateCopy) => {
				stateCopy.isHomeAnimationDone = payload;
			});
		case ERROR:
		default:
			return state;
	}
}

export default reducer;

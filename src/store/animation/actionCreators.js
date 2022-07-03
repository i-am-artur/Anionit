import { HOME_ANIMATION_IS_DONE } from './actionTypes';

export function setHomeAnimationIsDone(state) {
	return {
		type: HOME_ANIMATION_IS_DONE,
		payload: state,
	};
}

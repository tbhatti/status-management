import { SET_STATUS } from '../types/status';

export const setStatus = (status) => {

	return dispatch => {
		dispatch({
			type: SET_STATUS,
			payload: {
				status
			}
		})
	}
}
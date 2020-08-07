import { SET_STATUS } from '../types/status';

const initState = {
	status: {}
}

export default (state = initState, action) => {
	switch(action.type) {
		case SET_STATUS :
			return {...state, status: action.payload.status}
		default :
			return state
	}

}
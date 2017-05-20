import {handleActions} from 'redux-actions';
import {REQUEST_START, REQUEST_END, REQUEST_ERROR, ADD_LOCO} from 'app/constants/App';

const initialState = {
	isFetching: false,
	locoList: [],
};

export default handleActions({
	[REQUEST_START]: (state) => ({
		...state,
		isFetching: true,
	}),
	[REQUEST_END]: (state) => ({
		...state,
		isFetching: false,
	}),
	[REQUEST_ERROR]: (state, {payload: {error}}) => ({
		...state,
		error,
	}),
	[ADD_LOCO]: (state, {payload: {loco}}) => ({
		...state,
		locoList: [...state.locoList, loco],
	})
}, initialState);

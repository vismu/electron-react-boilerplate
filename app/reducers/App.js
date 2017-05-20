import {handleActions} from 'redux-actions';
import {REQUEST_START, REQUEST_END, REQUEST_ERROR} from 'app/constants/App';

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
}, initialState);

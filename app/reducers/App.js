import {handleActions} from 'redux-actions';
import {REQUEST_START, REQUEST_END, REQUEST_ERROR, ADD_LOCO, DELETE_LOCO} from 'app/constants/App';

const initialState = {
	isFetching: false,
	locoList: JSON.parse(localStorage.getItem('locoList') || '[]'),
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
	[ADD_LOCO]: (state, {payload: {loco}}) => {
		localStorage.setItem('locoList', JSON.stringify([...state.locoList, loco]));
		return {
			...state,
			locoList: JSON.parse(localStorage.getItem('locoList') || '[]'),
		};
	},
	[DELETE_LOCO]: (state, {payload: {loco}}) => {
		localStorage.setItem('locoList', JSON.stringify(_.reject(state.locoList, {id: loco.id})));
		return {
			...state,
			locoList: JSON.parse(localStorage.getItem('locoList') || '[]'),
		};
	}
}, initialState);

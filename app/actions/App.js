import {push, replace} from 'react-router-redux';
import {createAction} from 'redux-actions';
import {REQUEST_START, REQUEST_END, REQUEST_ERROR, ADD_LOCO} from 'app/constants/App';

export const changeRoute = (route, method = 'push') => (dispatch) => do {
	if (method === 'replace') {
		dispatch(replace(route));
	} else {
		dispatch(push(route));
	}
};

export const addLoco = createAction(
	ADD_LOCO,
	(loco) => ({loco}),
);

export const requestStart = createAction(
	REQUEST_START,
);
export const requestEnd = createAction(
	REQUEST_END,
);
export const requestError = createAction(
	REQUEST_ERROR,
	(error) => ({error}),
);

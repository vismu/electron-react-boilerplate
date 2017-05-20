import {combineReducers} from 'redux';
import {routerReducer as router} from 'react-router-redux';
import App from 'app/reducers/App';

const rootReducer = combineReducers({
	App,
	router,
});

export default rootReducer;

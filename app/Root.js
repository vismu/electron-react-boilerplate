import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from './routes';

type RootType = {
	store: {},
	history: {}
};

export default function Root({store, history}: RootType) {
	return (
		<Provider store={store}>
			<MuiThemeProvider>
				<ConnectedRouter history={history}>
					<Routes />
				</ConnectedRouter>
			</MuiThemeProvider>
		</Provider>
	);
}

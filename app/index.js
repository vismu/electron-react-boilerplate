import 'expose-loader?moment!moment';
import 'expose-loader?_!lodash';
import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from './Root';
import {configureStore, history} from './store/configureStore';
import './app.global.css';

const store = configureStore();
injectTapEventPlugin();

moment.locale('ru');
moment.updateLocale('ru', {
	calendar: {
		lastDay: '[Вчера]',
		sameDay: '[Сегодня]',
		nextDay: '[Завтра]',
		lastWeek: 'D MMMM',
		nextWeek: 'D MMMM',
		sameElse: 'D MMMM',
	}
});

render(
	<AppContainer>
		<Root store={store} history={history} />
	</AppContainer>,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept('./Root', () => {
		const NextRoot = require('./Root'); // eslint-disable-line global-require
		render(
			<AppContainer>
				<NextRoot store={store} history={history} />
			</AppContainer>,
			document.getElementById('root')
		);
	});
}

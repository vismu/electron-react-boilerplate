import React from 'react';
import {Switch, Route} from 'react-router';
import Home from './components/Home';

export default () => (
	<div>
		<Switch>
			<Route path="/" component={Home} />
		</Switch>
	</div>
);

import React from 'react';
import {Switch, Route} from 'react-router';
import LocoList from 'app/containers/LocoList';
import Login from 'app/containers/Login';

export default () => (
	<div>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route path="/locolist" component={LocoList} />
		</Switch>
	</div>
);

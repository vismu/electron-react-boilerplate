import React from 'react';
import {Switch, Route} from 'react-router';
import LocoList from 'app/containers/LocoList';
import Login from 'app/containers/Login';
import LocoAdd from 'app/containers/LocoAdd';
import LocoItem from 'app/containers/LocoItem';

export default () => (
	<div>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route path="/locolist" component={LocoList} />
			<Route path="/locoadd" component={LocoAdd} />
			<Route path="/locoitem/:id" component={LocoItem} />
		</Switch>
	</div>
);

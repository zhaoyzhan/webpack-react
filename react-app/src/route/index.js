import React from 'react';
import {
	Route,
	HashRouter as Router,
	Redirect,
	Switch
} from 'react-router-dom';

import RouterContainer from '../a_container/root/index.js';
import Home from '../a_container/home/index.js';
import Car from '../a_container/car/index.js';
import List from '../a_container/list/index.js';


const RouterCon = () => (
	<Router>
		<div>
			<RouterContainer></RouterContainer>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route path="/home" component={Home} />
				<Route path="/car" component={Car} />
				<Route path="/list" component={List} />
				<Route
					exact
				    path="*"
				    render={()=>(
						<Redirect to="/home" />
				    )}
				/>
			</Switch>
		</div>
	</Router>
);

export default RouterCon
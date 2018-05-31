import React from 'react';
import {
	Route,
	BrowserRouter as Router,
	Redirect,
	Switch
} from 'react-router-dom';
import Bundle from './bundle.js';


import RouterContainer from '../a_container/root/index.js';
import Home from '../a_container/home/index.js';
// const Home = (props) => (
// 	<Bundle load={()=> import('../a_container/home/index.js')}>
//     	{(Home) => <Home {...props}/>}
// 	</Bundle>
// );
// import Car from '../a_container/car/index.js';
const Car = (props) => (
	<Bundle load={()=> import('../a_container/car/index.js')}>
    	{(Car) => <Car {...props}/>}
	</Bundle>
);
// import List from '../a_container/list/index.js';
const List = (props) => (
	<Bundle load={()=> import('../a_container/list/index.js')}>
    	{(List) => <List {...props}/>}
	</Bundle>
);
// import News from '../a_container/new/index.js';
const News = (props) => (
	<Bundle load={()=> import('../a_container/new/index.js')}>
    	{(News) => <News {...props}/>}
	</Bundle>
);


const RouterCon = () => (
	<Router>
		<div>
			<RouterContainer></RouterContainer>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route path="/home" component={Home} />
				<Route path="/car" component={Car} />
				<Route path="/list" component={List} />
				<Route path="/news" component={News} />
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
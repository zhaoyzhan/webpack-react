import React from 'react';

import {
	Link,
	Redirect,
	Route
} from 'react-router-dom';

import Bundle from '../../../route/bundle.js';

const BHome = (props) => (
	<Bundle load={()=> import('../BHome/index.js')}>
		{(BHome)=> <BHome {...props}/>}
	</Bundle>
);

const BList = (props) => (
	<Bundle load={()=> import('../BList/index.js')}>
		{(BList)=> <BList {...props}/>}
	</Bundle>
);

const BCon = (props) => (
	<Bundle load={()=> import('../BCon/index.js')}>
		{(BCon)=> <BCon {...props}/>}
	</Bundle>
);

const BMap = (props) => (
	<Bundle load={()=> import('../BMap/index.js')}>
		{(BMap)=> <BMap {...props}/>}
	</Bundle>
);

const StyledTest = (props) => (
	<Bundle load={()=> import('../styledTest/index.js')}>
		{(StyledTest)=> <StyledTest {...props}/>}
	</Bundle>
);

class BackStageRoot extends React.Component {
	render() {
		let furl = this.props.match.url;
		const BRStyle = {
			display: 'flex',
		};
		const BRUl = {
			position: 'absolute',
			left: 0,
			top: 60,
			bottom: 0,
			overflowY: 'auto',
			width: 150,
			textAlign: 'center',
			lineHeight: '50px',
			background: '#ccc'
		}
		return (
			<div style={BRStyle} className="backstage-root">
				<ul style={BRUl}>
					<li><Link to={`${furl}/bhome`}>bhome</Link></li>
					<li><Link to={`${furl}/blist`}>blist</Link></li>
					<li><Link to={`${furl}/bmap`}>bmap</Link></li>
					<li><Link to={`${furl}/bcon`}>bcon</Link></li>
					<li><Link to={`${furl}/styledtest`}>styledtest</Link></li>
				</ul>
				<Route 
					exact
					path="/backstage"
					render={()=>(
						<Redirect to={`${furl}/bhome`} />
					)}
				/>
				<Route path={`${furl}/bhome`} component={BHome} />
				<Route path={`${furl}/blist`} component={BList} />
				<Route path={`${furl}/bmap`} component={BMap} />
				<Route path={`${furl}/bcon`} component={BCon} />
				<Route path={`${furl}/styledtest`} component={StyledTest} />
			</div>
		);
	}
};

export default BackStageRoot;
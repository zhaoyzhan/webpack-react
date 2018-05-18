import React from 'react';

class List extends React.Component {
	componentWillMount() {
		console.log(this.props.from);
	};
	render() {
		return (
			<div>List</div>
		);
	}
}

export default List;
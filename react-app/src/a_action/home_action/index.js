import axios from 'axios';

import $ from 'jquery';

export const changeTitle = v => dispatch => {
	console.log(v);
	console.log($);
	// $.ajax({
	// 	type: 'get',
	// 	url: 'http://localhost:8000',
	// 	success: function(data) {
	// 		console.log(data);
	// 	},
	// 	error: function() {
	// 		console.log('error');
	// 	}
	// });

	// $.ajax({
	// 	type: "post",
	// 	url: 'http://localhost:8000/postData',
	// 	data: {
	// 		name: 'lisi'
	// 	},
	// 	dataType: 'json',
	// 	success: function(data) {
	// 		console.log(data, 'datadata');
	// 	}
	// });

	let obj = {
		name: 'lisi'
	};
	// fetch('http://localhost:8000/postData', {
	// 	method: 'post',
	// 	headers: {
	// 		'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
	// 	},
	// 	body: `data=${JSON.stringify(obj)}`
	// }).then(response => response.json()
	// 	.then(data => {
	// 		console.log(data);
	// 	}));

	// axios.post('http://localhost:8000/postData', JSON.stringify(obj), {
	// 		headers: {
	// 			'Content-Type': 'application/json;charset=utf-8'
	// 		}
	// 	})
	// 	.then(function(res) {
	// 		console.log(res)
	// 	})
	// 	.catch(function(err) {
	// 		console.log(err)
	// 	});

	// axios.get('http://localhost:8000').then(function(res) {
	// 	console.log(res);
	// }).catch(function(err) {
	// 	console.log(err);
	// });
}

export const changeNum = products => ({
	type: "HOME::changeNum",
	products: products
})
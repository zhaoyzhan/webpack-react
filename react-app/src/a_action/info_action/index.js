import axios from 'axios';

import {
	message
} from 'antd';

export const setInfo = v => dispatch => {
	axios.post('http://localhost:8000/setData', JSON.stringify(v.obj), {
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			}
		})
		.then(function(res) {
			// console.log(res);
			message.success('保存成功');
		})
		.catch(function(err) {
			// console.log(err)
		});

}


export const getInfo = v => dispatch => {
	// console.log(v);
	// fetch('http://localhost:8000/postData', {
	// 	method: 'post',
	// 	body: JSON.stringify(v),
	// 	headers: {
	// 		'Content-Type': 'application/json;charset=utf-8'
	// 	}
	// }).then(response => response.json()
	// 	.then(data => {
	// 		console.log(data);
	// 	}));


	axios.post('http://localhost:8000/postData', JSON.stringify(v), {
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			}
		})
		.then(function(res) {
			// console.log(res)
		})
		.catch(function(err) {
			// console.log(err)
		});

}

export const deleInfo = v => dispatch => {
	axios.post('http://localhost:8000/deleteData', JSON.stringify(v), {
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			}
		})
		.then(function(res) {
			message.success(res.data.message);
		})
		.catch(function(err) {
			console.log(err);
		});
}
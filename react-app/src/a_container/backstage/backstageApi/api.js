//加法
const addNum = (num1, num2) => {
	return num1 + num2;
};
//减法
const cutNum = (num1, num2) => {
	return num1 - num2;
};
//判断是数组否存在
const indexof = (arr, val) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			return i;
		}
	}
	return -1;
};

const sortArr = (arr, flag) => {
	//0表示从低到高
	if (flag === 0) {
		arr.sort(function(a, b) {
			return a - b;
		});
	};
	//1表示从高到低
	if (flag === 1) {
		arr.sort(function(a, b) {
			return b - a;
		});
	};
	return arr;
};

export default {
	addNum,
	cutNum,
	indexof,
	sortArr
}
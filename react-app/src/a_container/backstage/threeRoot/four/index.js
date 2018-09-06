import React from 'react';

class FourContainer extends React.Component {
	componentWillMount() {};
	componentDidMount() {
		// document.getElementsByClassName('three-four-container')[0].addEventListener('scroll', this.handlescroll);
		// let imgArr = document.getElementsByTagName('img');
		// this.loadImg(imgArr);
	};
	handlescroll = () => {
		// console.log(document.documentElement.clientHeight);
		// let imgArr = document.getElementsByTagName('img');
		// this.loadImg(imgArr);
	};
	componentWillUnmount() {
		// document.getElementsByClassName('three-four-container')[0].removeEventListener('scroll');
	};
	// loadImg = (arr) => {
	// 	let that = this;
	// 	// console.log(arr, 'e');
	// 	// console.log(arr[0].getBoundingClientRect().top);
	// 	for (let i = 0, len = arr.length; i < len; i++) {
	// 		// console.log(arr[i].getBoundingClientRect().top);
	// 		if (arr[i].getBoundingClientRect().top < document.documentElement.clientHeight && !arr[i].isLoad) {
	// 			arr[i].isLoad = true; //图片显示标志位
	// 			//arr[i].style.cssText = "opacity: 0;"; 
	// 			(function(i) {
	// 				setTimeout(function() {
	// 					if (arr[i].dataset) { //兼容不支持data的浏览器
	// 						that.aftLoadImg(arr[i], arr[i].dataset.imgurl);
	// 					} else {
	// 						that.aftLoadImg(arr[i], arr[i].getAttribute("data-imgurl"));
	// 					}
	// 					arr[i].style.cssText = "transition: 1s; opacity: 1;" //相当于fadein
	// 				}, 500)
	// 			})(i);
	// 		}
	// 	}
	// };
	// aftLoadImg = (obj, url) => {
	// 	let oImg = new Image();
	// 	oImg.onload = function() {
	// 		obj.src = oImg.src; //下载完成后将该图片赋给目标obj目标对象
	// 	}
	// 	oImg.src = url; //oImg对象先下载该图像
	// };
	render() {
		const threeMainContent = {
			position: 'absolute',
			top: '40px',
			left: '0',
			right: '0',
			bottom: '0',
			padding: '10px',
			overflowY: 'auto'
		};
		return (
			<div className="three-four-container" style={threeMainContent}>
			</div>
		);
	}
}

export default FourContainer;
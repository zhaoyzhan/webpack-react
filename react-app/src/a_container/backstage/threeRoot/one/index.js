import React from 'react';

/**
图片懒加载(代理)
*/

/**
//设置imgNode  相关对象
    var  myImage = (function(){
        var imgNode = document.createElement("img");
        document.body.appendChild(imgNode);
        //向外部返回一个函数，在这个函数中给imgNode节点设置src(包括展位图的src，要展示的src)
        return {
            setImg:function(src){
                imgNode.src = src;
            }
        }
    })();
    
    //代理：给imgNode设置展位图，请求正式图，替换展位图
    var proxyImage = (function(){
        //创建出请求数据的img对象
        var img = new Image();
        //给img的onload事件添加方法:替换imgNode标签上显示的图片
        img.onload = function(){
            //通过myImage中的setImg函数，给imgNode设置url
            myImage.setImg(this.src);
        }
        //向外部返回函数，在这个函数中给imgNode设置展位图，并让img对象请求数据
        return{
            setSrc:function (src){
                myImage.setImg('./zuixin/timg.jpg');
                //让img对象请求传入的src地址
                img.src = src;
            }
        }
    })();
    
    proxyImage.setSrc('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534934079401&di=1ab2b9e29c625210ca70704f2ea9dd85&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fac6eddc451da81cb8299a5f65966d01609243189.jpg');

*/

class ThreeRootOne extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			myI: null,
			proxyI: null
		};
	}
	componentWillMount() {};
	componentDidMount() {
		let myI = this.myImage();
		let proxyI = null;
		let that = this;
		this.setState({
			myI
		}, () => {
			proxyI = that.proxyImage();
			that.setState({
				proxyI
			}, () => {
				console.log(proxyI.setSrc);
				// proxyI.setSrc('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534934079401&di=1ab2b9e29c625210ca70704f2ea9dd85&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fac6eddc451da81cb8299a5f65966d01609243189.jpg');
			});
		});
	};
	//设置imgNode  相关对象
	myImage = () => {
		let imgNode = document.createElement("img");
		document.getElementsByClassName('threerootone')[0].appendChild(imgNode);
		//向外部返回一个函数，在这个函数中给imgNode节点设置src(包括展位图的src，要展示的src)
		return {
			setImg: function(src) {
				imgNode.src = src;
			}
		}
	};
	//代理：给imgNode设置展位图，请求正式图，替换展位图
	proxyImage = () => {
		let that = this;
		//创建出请求数据的img对象
		let img = new Image();
		//给img的onload事件添加方法:替换imgNode标签上显示的图片
		img.onload = function() {
			//通过myImage中的setImg函数，给imgNode设置url
			that.myI.setImg(this.src);
		};
		//向外部返回函数，在这个函数中给imgNode设置展位图，并让img对象请求数据
		return {
			setSrc: function(src) {
				that.myI.setImg('../../../../img/bg.jpg');
				//让img对象请求传入的src地址
				img.src = src;
			}
		}
	};
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
			<div style={threeMainContent}>
				<div className="threerootone">

				</div>
			</div>
		);
	}
}

export default ThreeRootOne;
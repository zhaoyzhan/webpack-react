import React from 'react';

import './index.css';

class ListBtnCon extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeF: ['', '', '', '', '', '', '', ''],
			checkArr: ['', '', '', '', '', '', '', ''],
			noCheckArr: ['1', '2', '3', '4', '5', '6', '7', '8']
		};
	};
	_choseBtn = (index, flag) => {
		let {
			activeF,
			checkArr,
			noCheckArr
		} = this.state;
		let newCheckArr = [...checkArr];
		let newnoCheckArr = [...noCheckArr];

		if (activeF[flag] === '') {
			activeF[flag] = index;
			let fla = newnoCheckArr.splice(0, 1);
			newCheckArr[flag] = fla[0];
		} else {
			activeF[flag] = '';
			let fla = newCheckArr[flag];
			newCheckArr[flag] = '';
			newnoCheckArr.push(fla);
		}
		newnoCheckArr.sort();
		// console.log(newnoCheckArr);
		this.setState({
			activeF: [...activeF],
			checkArr: [...newCheckArr],
			noCheckArr: [...newnoCheckArr]
		});
	};
	render() {
		let {
			addClick,
			numFlag
		} = this.props;
		let {
			activeF,
			checkArr
		} = this.state;
		return (
			<div>
				<button onClick={addClick}>点击</button>
				<div className="btn-con">
					<ul className="con">
					    <li onClick={()=>this._choseBtn('1', 0)}><div className={`box ${activeF[0] === '1' ? 'active' : ''}`}>{checkArr[0]}</div><p>哈哈1</p></li>
					    <li onClick={()=>this._choseBtn('2', 1)}><div className={`box ${activeF[1] === '2' ? 'active' : ''}`}>{checkArr[1]}</div><p>哈哈2</p></li>
					    <li onClick={()=>this._choseBtn('3', 2)}><div className={`box ${activeF[2] === '3' ? 'active' : ''}`}>{checkArr[2]}</div><p>哈哈3</p></li>
					    <li onClick={()=>this._choseBtn('4', 3)}><div className={`box ${activeF[3] === '4' ? 'active' : ''}`}>{checkArr[3]}</div><p>哈哈4</p></li>
					    <li onClick={()=>this._choseBtn('5', 4)}><div className={`box ${activeF[4] === '5' ? 'active' : ''}`}>{checkArr[4]}</div><p>哈哈5</p></li>
					    <li onClick={()=>this._choseBtn('6', 5)}><div className={`box ${activeF[5] === '6' ? 'active' : ''}`}>{checkArr[5]}</div><p>哈哈6</p></li>
					    <li onClick={()=>this._choseBtn('7', 6)}><div className={`box ${activeF[6] === '7' ? 'active' : ''}`}>{checkArr[6]}</div><p>哈哈7</p></li>
					    <li onClick={()=>this._choseBtn('8', 7)}><div className={`box ${activeF[7] === '8' ? 'active' : ''}`}>{checkArr[7]}</div><p>哈哈8</p></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default ListBtnCon;
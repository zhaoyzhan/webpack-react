const initState = {
	title: '大数据开发平台',
	num: 0
};

/* action 对应的处理方法，用于更新state中的数据 */
const actDefault = (state) => state;
//改变title信息
const changeTitle = (state, action) => {
	const {
		products
	} = action;
	console.log(products);
	return state;
}

//改变顶部图片
const changeNum = (state, action) => {
	const {
		products
	} = action;
	console.log(products);
	return Object.assign({}, state, {
		num: state.num + 1
	});
}

const reducerFn = (state = initState, action) => {
	switch (action.type) {
		case 'HOME::changeTitle':
			return changeTitle(state, action);
		case 'HOME::changeNum':
			return changeNum(state, action);
		default:
			return actDefault(state, action);
	}
};

export default reducerFn;
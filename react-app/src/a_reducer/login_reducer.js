const initState = {
	routerFlag: true
};

/* action 对应的处理方法，用于更新state中的数据 */
const actDefault = (state) => state;

const reducerFn = (state = initState, action) => {
	switch (action.type) {
		default: return actDefault(state, action);
	}
};

export default reducerFn;
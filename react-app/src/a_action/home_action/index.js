export const changeTitle = v => dispatch => {
	console.log(v);
}

export const changeNum = products => ({
	type: "HOME::changeNum",
	products: products
})
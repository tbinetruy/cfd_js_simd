export const defaultState = {
	foo: 'bar',
}

export const configBarReducer = function(state = defaultState, action) {
	switch(action.type) {
		case 1:
			return
		default:
			return state
	}
}

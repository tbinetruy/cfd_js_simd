export const defaultState = {
	foo: 'bar',
}

export const rootReducer = function(state = defaultState, action) {
	switch(action.type) {
		case 1:
			return
		default:
			return state
	}
}

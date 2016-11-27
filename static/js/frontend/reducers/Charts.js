import {
	UPDATE_CHART1_DATA,
	EMPTY_CHART_1
} from "./actions/Charts.js"

export const defaultState ={
	chart1: {
		y: [],			// (array) y data to plot
		y_0: [],		// (array) y data initial state 
		dx: -1,			// (number) space step
	},
}

export const chartsReducer = function(state = defaultState, action) {
	switch(action.type) {
		case UPDATE_CHART1_DATA:
			return {
				...state,
				chart1: {
					y: action.y,
					y_0: action.y_0,
					dx: action.dx,
				}
			}
		case EMPTY_CHART_1:
			return {
				...state,
				chart1: defaultState.chart1
			}
		default:
			return state
	}
}

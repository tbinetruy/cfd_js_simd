import {
	CONFIG_UPDATE_NX,
	CONFIG_UPDATE_DT,
	CONFIG_UPDATE_T,
	CONFIG_UPDATE_C,
	CONFIG_UPDATE_L,
} from "./actions/ConfigBar.js"

export const defaultState = {
	nx: 61,				// number of nodes in x dir
	dt: 0.025,			// (s) timestep
	t: 1,				// (s) want solution at time t
	c: 1,				// convection constant
	L: 5,				// (m) length of mesh 
}

export const configBarReducer = function(state = defaultState, action) {
	switch(action.type) {
		case CONFIG_UPDATE_NX:
			return {
				...state,
				nx: action.nx
			}
		case CONFIG_UPDATE_DT:
			return {
				...state,
				dt: action.dt
			}
		case CONFIG_UPDATE_T:
			return {
				...state,
				t: action.t
			}
		case CONFIG_UPDATE_L:
			return {
				...state,
				L: action.L
			}
		case CONFIG_UPDATE_C:
			return {
				...state,
				c: action.c
			}
		default:
			return state
	}
}

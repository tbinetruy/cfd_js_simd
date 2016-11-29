import {
	CONFIG_UPDATE_NX,
	CONFIG_UPDATE_DT,
	CONFIG_UPDATE_T,
	CONFIG_UPDATE_C,
	CONFIG_UPDATE_L,
	CONFIG_UPDATE_EXP,
	CONFIG_UPDATE_SOLV,
	CONFIG_UPDATE_NU,
} from "./actions/ConfigBar.js"

export const defaultState = {
	nx: 101,				// number of nodes in x dir
	dt: 0.0044,			// (s) timestep
	t: 0.43,				// (s) want solution at time t
	c: 1,				// convection constant
	nu: 0.7,			// diffusion constant
	L: 2,				// (m) length of mesh 
	experiment: 1,		// (int) experiment (1d linear conv, 2d diff etc)
	solver: 1,			// (int) solver (explicit, implicit, later dual time etc)
}

export const configBarReducer = function(state = defaultState, action) {
	switch(action.type) {
		case CONFIG_UPDATE_SOLV:
			return {
				...state,
				solver: action.solver
			}
		case CONFIG_UPDATE_EXP:
			return {
				...state,
				experiment: action.exp
			}
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
		case CONFIG_UPDATE_NU:
			return {
				...state,
				nu: action.nu
			}
		default:
			return state
	}
}

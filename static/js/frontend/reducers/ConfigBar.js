import {
	CONFIG_UPDATE_NX,
	CONFIG_UPDATE_DT,
	CONFIG_UPDATE_T,
	CONFIG_UPDATE_C,
	CONFIG_UPDATE_L,
	CONFIG_UPDATE_EXP,
	CONFIG_UPDATE_SOLV,
	CONFIG_UPDATE_NU,
	CONFIG_UPDATE_BC_TYPE,
	CONFIG_UPDATE_BC,
	CONFIG_UPDATE_Y0,
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
	BC_type: 1,			// (int) BC type (periodic, etc)
	BC: {				// (obj) stores boundary condition info at edges
		dirichlet: {	// (obj) dirichlet constants
			east: 0,	// (number) constant to apply at right edge
			west: 0,	// (number) constnat to apply at left edge
		},
		neumann: {		// (obj) neumann constants
			east: 0,
			west: 0,
		},
	}
}

export const configBarReducer = function(state = defaultState, action) {
	switch(action.type) {
		case CONFIG_UPDATE_Y0:
			return {
				...state,
				y0: action.y0
			}
		case CONFIG_UPDATE_BC:
			return {
				...state,
				BC: {
					...state.BC,
					dirichlet: {
						...state.BC.dirichlet,
						east: action.dirichlet.east,
						west: action.dirichlet.west,
					},
					neumann: {
						...state.BC.neumann,
						east: action.neumann.east,
						west: action.neumann.west
					}
				}
			}
		case CONFIG_UPDATE_BC_TYPE:
			return {
				...state,
				BC_type: action.BC_type
			}
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

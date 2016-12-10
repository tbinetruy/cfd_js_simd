export const CONFIG_UPDATE_NX = "CONFIG_UPDATE_NX"
export const CONFIG_UPDATE_DT = "CONFIG_UPDATE_DT"
export const CONFIG_UPDATE_T = "CONFIG_UPDATE_T"
export const CONFIG_UPDATE_C = "CONFIG_UPDATE_C"
export const CONFIG_UPDATE_L = "CONFIG_UPDATE_L"
export const CONFIG_UPDATE_EXP = "CONFIG_UPDATE_EXPERIMENT"
export const CONFIG_UPDATE_SOLV = "CONFIG_UPDATE_SOLVER"
export const CONFIG_UPDATE_NU = "CONFIG_UPDATE_NU" 
export const CONFIG_UPDATE_BC_TYPE = "CONFIG_UPDATE_BC_TYPE"
export const CONFIG_UPDATE_BC = "CONFIG_UPDATE_BC"
export const CONFIG_UPDATE_Y0 = "CONFIG_UPDATE_Y0"
export const CONFIG_UPDATE_DISCRETIZATION = "CONFIG_UPDATE_DISCRETIZATION"

export const update_discretizationType = function(discretizationType) {
	return {
		type: CONFIG_UPDATE_DISCRETIZATION,
		discretizationType
	}
}

export const update_y0 = function(y0) {
	return {
		type: CONFIG_UPDATE_Y0,
		y0
	}
}

export const update_BC = function(BC) {
	return {
		type: CONFIG_UPDATE_BC,
		dirichlet: {
			east: BC.dirichlet.east,
			west: BC.dirichlet.west,
		},
		neumann: {
			east: BC.neumann.east,
			west: BC.neumann.west
		}
	}
}

export const update_BC_type = function(BC_type) {
	return {
		type: CONFIG_UPDATE_BC_TYPE,
		BC_type,
	}
}

export const update_solv = function(solver) {
	return {
		type: CONFIG_UPDATE_SOLV,
		solver,
	}
}

export const update_exp = function(exp) {
	return {
		type: CONFIG_UPDATE_EXP,
		exp,
	}
}

export const update_nx = function(nx) {
	return {
		type: CONFIG_UPDATE_NX,
		nx,
	}
}

export const update_t = function(t) {
	return {
		type: CONFIG_UPDATE_T,
		t,
	}
}
export const update_dt = function(dt) {
	return {
		type: CONFIG_UPDATE_DT,
		dt,
	}
}
export const update_c = function(c) {
	return {
		type: CONFIG_UPDATE_C,
		c,
	}
}
export const update_nu = function(nu) {
	return {
		type: CONFIG_UPDATE_NU,
		nu,
	}
}
export const update_L = function(L) {
	return {
		type: CONFIG_UPDATE_L,
		L,
	}
}

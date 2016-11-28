export const CONFIG_UPDATE_NX = "CONFIG_UPDATE_NX"
export const CONFIG_UPDATE_DT = "CONFIG_UPDATE_DT"
export const CONFIG_UPDATE_T = "CONFIG_UPDATE_T"
export const CONFIG_UPDATE_C = "CONFIG_UPDATE_C"
export const CONFIG_UPDATE_L = "CONFIG_UPDATE_L"
export const CONFIG_UPDATE_EXP = "CONFIG_UPDATE_EXPERIMENT"

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
export const update_L = function(L) {
	return {
		type: CONFIG_UPDATE_L,
		L,
	}
}

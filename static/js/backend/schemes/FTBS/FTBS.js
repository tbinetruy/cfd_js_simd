const FTBS_1D = {
	linearConv: (u_temp, u_i, i, dt, dx, c) => {
		return u_i - c * dt / dx * (u_i - u_temp[i-1])
	},
	nonLinearConv: () => {

	},
}

export const FTBS = {
	_1D: FTBS_1D
}

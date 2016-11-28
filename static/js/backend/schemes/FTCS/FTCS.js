const FTCS_1D = {
	diffusion: (u_temp, u_i, i, dt, dx, nu) => {
		return u_i + nu * dt / Math.pow(dx, 2) * (u_temp[i+1] - 2 * u_i + u_temp[i-1])
	},
}

export const FTCS = {
	_1D: FTCS_1D
}

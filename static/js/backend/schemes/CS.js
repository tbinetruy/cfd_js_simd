const CS_1D = {
	linear: (u_temp, u_i, i, dt, dx, c) => {
		return c * dt / Math.pow(dx, 2) * (u_temp[i+1] - 2 * u_i + u_temp[i-1])
	},
}

export const CS = {
	_1D: CS_1D
}

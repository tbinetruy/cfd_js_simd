export const BC = {
	periodical: {
		_1D: (y, y_temp, dt, dx, nu) => {
			y[0] = y_temp[0] - y_temp[0] * dt / dx *(y_temp[0] - y_temp[y_temp.length-2]) + nu * dt / dx**2 * (y_temp[1] - 2 * y_temp[0] + y_temp[y_temp.length-2])
			y[y.length-1] = y_temp[y.length - 1] - y_temp[y.length - 1] * dt / dx *(y_temp[y.length - 1] - y_temp[y_temp.length-2]) + nu * dt / dx**2 * (y_temp[0] - 2 * y_temp[y.length - 1] + y_temp[y_temp.length-2])
		}
	}
}

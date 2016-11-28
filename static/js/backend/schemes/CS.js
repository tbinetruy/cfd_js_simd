const CS_1D = {
	linear: (y, y_i, i) => {
		return y[i+1] - 2 * y_i + y[i-1]
	},
}

export const CS = {
	_1D: CS_1D
}

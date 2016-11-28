const BS_1D = {
	linear: (y, y_i, i) => {
		return y_i - y[i-1]
	}
}

export const BS = {
	_1D: BS_1D
}

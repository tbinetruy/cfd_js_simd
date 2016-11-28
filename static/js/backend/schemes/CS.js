const CS_1D = {
	linear: (y, y_i, i, BC_type) => {
		if(!BC_type || (i > 0 && i < y.length - 1))
			return y[i+1] - 2 * y_i + y[i-1]
		else if(BC_type === 'periodic') {
			if(i === 0)
				return y[1] - 2 * y[0] + y[y.length - 2]
			else
				return y[0] - 2 * y[y.length - 1] + y[y.length - 2]
		}
	}
}

export const CS = {
	_1D: CS_1D
}

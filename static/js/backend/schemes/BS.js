const BS_1D = {
	linear: (y, y_i, i, BC_type = null) => {
		if(!BC_type || (i > 0 && i < y.length - 1))
			return y_i - y[i-1]
		else if(BC_type === 'periodic') {
			if(i === 0)
				return y_i - y[y.length - 2]
			else
				return y[y.length - 1] - y[y.length - 2]
		}
	}
}

export const BS = {
	_1D: BS_1D
}

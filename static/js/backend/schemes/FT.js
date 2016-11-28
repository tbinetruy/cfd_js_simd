export const FT = {
	_1D: {
		linear: (y, y_i, i, BC_type = null) => {
			if(!BC_type || (i >= 0 && i < y.length - 1))
				return y_i
			else if(BC_type === 'periodic') {
				if(i === 0)
					return y[0]
				else
					return y[y.length - 1]
			}
		}
	}
}

export const explicit = {
	euler: {
		backwardSpace: {
			_1D: (y, y_i, i, BC_type = null) => {
				if(i > 0 && i < y.length)
					return y_i - y[i-1]
				else if(BC_type === 'periodic') {
					if(i === 0)
						return y_i - y[y.length - 2]
					else
						return y[y.length - 1] + y[y.length - 2]
				} else  {
					if(i === 0)
						return y[1]
					if(i === y.length - 1)
						return y[y.length - 2]
				}
			},
		},
		centeredSpace: {
			_1D: (y, y_i, i, BC_type) => {
				if(i > 0 && i < y.length - 1)
					return y[i+1] - 2 * y_i + y[i-1]
				else if(BC_type === 'periodic') {
					if(i === 0)
						return y[1] - 2 * y[0] + y[y.length - 2]
					else
						return y[0] - 2 * y[y.length - 1] + y[y.length - 2]
				} else {
					if(i === 0)
						return y[i + 1] - y[0]
					if(i === y.length - 1)
						return y[i - 1] - y[i]
				}
			}
		},
		forwardTime: {
			_1D: (y, y_i, i, BC_type = null) => {
				if(i >= 0 && i < y.length - 1)
					return y_i
				else if(BC_type === 'periodic') {
					if(i === 0)
						return y[0]
					else
						return y[y.length - 1]
				} else 
					return y_i
			}
		}
	}
}


export const explicit = {
	backwardSpaceEuler: {
		_1D: ({ y, y_i, i, c, dx, dt }) => {
			let diff = 0
			const BC_type = '' // dummy var for now
			const sigma = c * dt / dx
			if(i > 0 && i < y.length)
				diff = y_i - y[i-1]
			else if(BC_type === 'periodic') {
				if(i === 0)
					diff = y_i - y[y.length - 2]
				else
					diff = y[y.length - 1] + y[y.length - 2]
			} else  {
				if(i === 0)
					diff = y[1]
				if(i === y.length - 1)
					diff = y[y.length - 2]
			}

			return sigma * diff
		},
	},
	centeredSpaceEuler: {
		_1D: ({ y, y_i, i, c, dx, dt }) => {
			let diff = 0
			const BC_type = '' // dummy var for now
			const sigma = c * dt / Math.pow(dx, 2)
			if(i > 0 && i < y.length - 1)
				diff = y[i+1] - 2 * y_i + y[i-1]
			else if(BC_type === 'periodic') {
				if(i === 0)
					diff = y[1] - 2 * y[0] + y[y.length - 2]
				else
					diff = y[0] - 2 * y[y.length - 1] + y[y.length - 2]
			} else {
				if(i === 0)
					diff = y[i + 1] - y[0]
				if(i === y.length - 1)
					diff = y[i - 1] - y[i]
			}
			return sigma * diff
		}
	},
	forwardTimeEuler: {
		_1D: ({ y, y_i, i }) => {
			let diff = 0
			const BC_type = '' // dummy var for now
			if(i >= 0 && i < y.length - 1)
				diff = y_i
			else if(BC_type === 'periodic') {
				if(i === 0)
					diff = y[0]
				else
					diff= y[y.length - 1]
			} else 
				diff = y_i

			return diff
		}
	}
}


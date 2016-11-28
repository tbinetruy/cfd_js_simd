export const solve_FTCS = {
	_1D: (array, scheme, params, BC) => {
		const { nt, dt, dx, nu } = params
		let y = [...array]
		let y_temp = numpy.ones(y.length)

		for(let n = 0; n <= nt; n++) {
			y_temp = [...y]

			y = y_temp.map((y_i, i) => {
				if(i > 0 && i < y_temp.length - 1)
					return scheme(y_temp, y_i, i, dt, dx, nu)
				else
					return y_i
			})

			// border conditions
			if(BC)
				BC(y, y_temp, dt, dx, nu)
		}

		return y
	}
}

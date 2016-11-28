export const solve_FTBS = {
	_1D: (array, scheme, params) => {
		const { nt, dt, dx, c } = params
		let y = [...array]
		let y_temp = numpy.ones(y.length)

		for(let n = 0; n <= nt; n++) {
			y_temp = [...y]

			y = y_temp.map((y_i, i) => {
				if(i > 0)
					return scheme(y_temp, y_i, i, dt, dx, c)
				else
					return y_i
			})
		}

		return y
	}
}

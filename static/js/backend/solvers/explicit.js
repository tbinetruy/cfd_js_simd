export const explicit = {
	_1D: (array, scheme, params, BC) => {
		const { nt, dt, dx, c, experiment } = params
		let y = [...array]
		let y_temp = numpy.ones(y.length)

		let sigma = c * dt / dx
		if(experiment > 2)
			sigma = c * dt / Math.pow(dx, 2)

		for(let n = 0; n <= nt; n++) {
			y_temp = [...y]

			y = y_temp.map((y_i, i) => {
				return scheme(y_temp, y_i, i, dt, dx, c, BC)
			})

			y[0] = BC.dirichlet.west
			y[y.length-1] = BC.dirichlet.east
		}

		return y
	}
}

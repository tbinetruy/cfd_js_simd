import { BC as getBC } from "../BC/BC.js"

export const explicit = {
	_1D: (array, scheme, params, BC) => {
		const { nt, dt, dx, c, experiment } = params
		let y = [...array]
		let y_temp = numpy.ones(y.length)

		// CFL different for advection and diffusion
		let sigma = c * dt / dx
		if(experiment > 2)
			sigma = c * dt / Math.pow(dx, 2)

		// iterate over time
		for(let n = 0; n <= nt; n++) {
			y_temp = [...y]

			// iterate over space
			y = y_temp.map((y_i, i) => {
				return scheme(y_temp, y_i, i, dt, dx, c, BC)
			})


			// BC

			// neumann BC
			if(BC.neumann.east)
				y[y.length-1] = y[y.length-2] + getBC.neumann.explicit.euler(BC.neumann.east)
			if(BC.neumann.west)
				y[0] = y[1] + getBC.neumann.explicit.euler(BC.neumann.west)

			// dirichlet BC (overrides neumann)
			if(BC.dirichlet.west)
				y[0] = getBC.dirichlet.explicit.euler(BC.dirichlet.west)
			if(BC.dirichlet.east)
				y[0] = getBC.dirichlet.explicit.euler(BC.dirichlet.east)
		}

		return y
	}
}

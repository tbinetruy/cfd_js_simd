import { BC as getBC } from "../BC/BC.js"
import { PDEs } from "../PDEs/PDEs.js"
import { getSolver, getEqn, getBC_type, getIC } from "../app_config.js"

export const explicit = {
	// y_0: solution array at t = 0
	// solverConfig: config relative to solver
	// PDEterms: PDE discretization description
	// BC: BC type
	_1D: (y_0, solverConfig, PDEterms, BC) => {
		const { nt, dt, dx, c, experiment, discretizationType } = solverConfig
		let y = [...y_0]
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
				return PDEs.discretizePDE.explicit._1D(solverConfig, PDEterms, { y: y_temp, y_i, i, c, dx, dt })
				//return scheme(y_temp, y_i, i, dt, dx, c, BC)
			})


			// BC

			// neumann BC
			y[y.length-1] = y[y.length-2] + getBC.neumann.explicit[solverConfig.discretization].euler(BC.neumann.east, dx)
			y[0] = y[1] + getBC.neumann.explicit[solverConfig.discretization].euler(BC.neumann.west, dx)

			// dirichlet BC (overrides neumann)
			if(BC.dirichlet.west)
				y[0] = getBC.dirichlet.explicit[solverConfig.discretization].euler(BC.dirichlet.west)
			if(BC.dirichlet.east)
				y[y.length-1] = getBC.dirichlet.explicit[solverConfig.discretization].euler(BC.dirichlet.east)
		}

		return y
	}
}

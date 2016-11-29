import { getSolver, getEqn } from "./app_config.js"
import { PDEs } from "./PDEs/PDEs.js"
import { solvers } from "./solvers/solvers.js"
import { computeIC_1D } from "./IC/IC.js"
import { compute_param_1D } from "./params/param_1D.js"
import { solutions } from "./solutions/solutions.js"
import { BC } from "./BC/BC.js"

// experiment: 'linearConv', 'nonLinearConv', etc
export const routine1D = userInput => {
	const { experiment, nx, solver } = userInput
	const params = compute_param_1D[experimentToString(experiment)](userInput)
	let u_0, u_analytical
	let u = numpy.ones(nx)

	switch(experiment) {
		case 1:
			u_0 = computeIC_1D.hat(u, params.dx)
			u = solvers[getSolver[solver]]._1D(u_0, PDEs[getEqn[experiment]][getSolver[solver]]._1D, params)
			//u = solvers.implicit._1D(u_0, PDEs.convection.implicit._1D, {...params, sigma: 0.1})
			break
		case 2:
			u_0 = computeIC_1D.hat(u, params.dx)
			u = solvers.explicit._1D(u_0, PDEs.convection.explicit._1D, params)
			u = solvers.implicit._1D(u_0, PDEs.convection.implicit._1D, {...params, sigma: 0.1})
			break
		case 3:
			u_0 = computeIC_1D.hat(u, params.dx)
			u = solvers.explicit._1D(u_0, PDEs.diffusion.explicit._1D, { ...params, c: params.nu })
			u = solvers.implicit._1D(u_0, PDEs.diffusion.implicit._1D, {...params, sigma: 0.5})
			break
		case 4:
			u_0 = computeIC_1D.burgers(u, params)
			//u = solvers.explicit._1D(u_0, PDEs.burgers.explicit._1D, { ...params, c: params.nu }, 'periodic')
			u_analytical = solutions.burgers._1D(params.nx, params.nt * params.dt, params.nu)

			break
	}
	u = solvers[getSolver[solver]]._1D(u_0, PDEs[getEqn[experiment]][getSolver[solver]]._1D, params)

	return { u_0, u, u_analytical, dx: params.dx }
}


const experimentToString = exp => {
	switch(exp) {
		case 1:
			return 'linearConv'
		case 2: 
			return 'nonLinearConv'
		case 3:
			return 'diffusion'
		case 4:
			return 'burgers'
		default:
			return 'linearConv'
	}
}

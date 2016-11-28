import { PDEs } from "./PDEs/PDEs.js"
import { solve_FTBS } from "./solvers/FTBS.js"
import { solve_FTCS } from "./solvers/FTCS.js"
import { computeIC_1D } from "./IC/IC.js"
import { compute_param_1D } from "./params/param_1D.js"
import { solutions } from "./solutions/solutions.js"
import { BC } from "./BC/BC.js"

// experiment: 'linearConv', 'nonLinearConv', etc
export const routine1D = userInput => {
	const { experiment, nx } = userInput
	const params = compute_param_1D[experimentToString(experiment)](userInput)
	let u_0, u_analytical
	let u = numpy.ones(nx)

	switch(experiment) {
		case 1:
			u_0 = computeIC_1D.hat(u, params.dx)
			u = solve_FTBS._1D(u_0, PDEs.convection.linear._1D, params)
			break
		case 2:
			u_0 = computeIC_1D.hat(u, params.dx)
			u = solve_FTBS._1D(u_0, PDEs.convection.nonLinear._1D, params)
			break
		case 3:
			u_0 = computeIC_1D.hat(u, params.dx)
			u = solve_FTCS._1D(u_0, PDEs.diffusion._1D, params)
			break
		case 4:
			u_0 = computeIC_1D.burgers(u, params)
			u = solve_FTCS._1D(u_0, PDEs.burgers._1D, { ...params, nu: 0.07 }, 'periodic')
			u_analytical = solutions.burgers._1D(params.nx, params.nt * params.dt, params.nu)

			break
	}

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

import { convection } from "./PDEs/convection.js"
import { diffusion } from "./PDEs/diffusion.js"
import { FTCS } from "./schemes/FTCS/FTCS.js"
import { solve_FTBS } from "./solvers/FTBS.js"
import { solve_FTCS } from "./solvers/FTCS.js"
import { computeIC_1D } from "./IC/IC.js"
import { compute_param_1D } from "./params/param_1D.js"

// experiment: 'linearConv', 'nonLinearConv', etc
export const routine1D = userInput => {
	const { experiment, nx } = userInput
	const params = compute_param_1D[experimentToString(experiment)](userInput)

	let u = numpy.ones(nx)

	const u_0 = computeIC_1D(u, params.dx)

	switch(experiment) {
		case 1:
			u = solve_FTBS._1D(u_0, convection.linear._1D, params)
			break
		case 2:
			u = solve_FTBS._1D(u_0, convection.nonLinear._1D, params)
			break
		case 3:
			u = solve_FTCS._1D(u_0, diffusion._1D, params)
			break
	}

	return { u_0, u, dx: params.dx }
}


const experimentToString = exp => {
	switch(exp) {
		case 1:
			return 'linearConv'
		case 2: 
			return 'nonLinearConv'
		case 3:
			return 'diffusion'
		default:
			return 'linearConv'
	}
}

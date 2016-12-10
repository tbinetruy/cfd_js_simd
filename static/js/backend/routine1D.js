import { getSolver, getEqn, getBC_type, getIC } from "./app_config.js"
import { PDEs } from "./PDEs/PDEs.js"
import { solvers } from "./solvers/solvers.js"
import { computeIC_1D } from "./IC/IC.js"
import { compute_param_1D } from "./params/param_1D.js"
import { solutions } from "./solutions/solutions.js"
import { BC } from "./BC/BC.js"

// experiment: 'linearConv', 'nonLinearConv', etc
export const routine1D = userInput => {
	const { experiment, nx, solver, BC_type, BC } = userInput
	const params = compute_param_1D['createPDE'](userInput)
	let u_0, u_analytical
	let u = numpy.ones(nx)

	switch(experiment) {
		case 1:
			//u_0 = computeIC_1D[getIC[params.IC]](u, params.dx)
			break
		case 2:
			//u_0 = computeIC_1D.hat(u, params.dx)
			break
		case 3:
			//u_0 = computeIC_1D.hat(u, params.dx)
			break
		case 4:
			//u_0 = computeIC_1D.burgers(u, params)
			u_analytical = solutions.burgers._1D(params.nx, params.nt * params.dt, params.nu)
			break
	}

	u_0 = computeIC_1D[getIC[params.IC]](u, params)
	// u = solvers[getSolver[solver]]._1D(u_0, PDEs[getEqn[experiment]][getSolver[solver]]._1D, params, BC)
	
	const config = {
		solver: getSolver[solver],
		dim: '_1D',
	}

	// diff params
	// dt: 0.001677
	// t: 0.033333
	// nx: 41
	let timeScheme = 'forwardTimeEuler'
	if(getSolver[solver] === getSolver[2])
		timeScheme = 'backwardTimeEuler'	// implicit

	const PDEterms = [
		{
			scheme: timeScheme,
			c: 0
		},
		// {
		// 	scheme: 'centeredSpaceEuler',
		// 	c: 0.3
		// },
		{
			scheme: 'backwardSpaceEuler',
			c: -1
		}
	]

	u = solvers[getSolver[solver]][config.dim](u_0, params, PDEterms, BC)

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

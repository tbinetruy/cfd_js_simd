import { solver1D } from "./solvers/solver1D.js"
import { FTBS } from "./schemes/FTBS/FTBS.js"
import { FTCS } from "./schemes/FTCS/FTCS.js"
import { computeIC_1D } from "./IC/IC.js"

// experiment: 'linearConv', 'nonLinearConv', etc
export const routine1D = (experiment, nt, nx, dt, dx, c) => {
	let u = numpy.ones(nx)

	const u_0 = computeIC_1D(u, dx)

	if(experiment === 'linearConv' || experiment === 'nonLinearConv')
		u = solver1D(u_0, FTBS._1D[experiment], dt, dx, nt, c)
	else
		u = solver1D(u_0, FTCS._1D[experiment], dt, dx, nt, c)

	return { u_0, u }
}

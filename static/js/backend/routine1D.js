import { solver1D } from "./solvers/solver1D.js"
import { FTBS } from "./schemes/FTBS/FTBS.js"

export const routine1D = (nt, nx, dt, dx, c) => {
	let u = numpy.ones(nx)

	// IC
	const u_0 = u.map( (u_i, i) => {
		if(i >= Math.floor(0.5 / dx) && i <= Math.floor(1 / dx + 1))
			return 2 
		else
			return 1
	})

	u = solver1D(u_0, FTBS._1D, dt, dx, nt, c)

	return { u_0, u }
}

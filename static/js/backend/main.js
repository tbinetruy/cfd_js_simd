import { solver1D } from "./solvers/solver1D.js"
import { FTBS } from "./schemes/FTBS/FTBS.js"

require('pyextjs')

onmessage = e => {
	const { nx, dt, t, c, L } = e.data
	const dx = L / (nx - 1)
	const nt = t / dt			// number of timesteps to calc

	// 1D
	let u = numpy.ones(nx)

	// IC
	const u_0 = u.map( (u_i, i) => {
		if(i >= Math.floor(0.5 / dx) && i <= Math.floor(1 / dx + 1))
			return 2 
		else
			return 1
	})

	u = solver1D(u_0, FTBS._1D, dt, dx, nt, c)

	postMessage({
		y_0: u_0,
		y: u,
		dx: dx
	})
}


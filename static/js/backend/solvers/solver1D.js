import { solve_FTBS } from "./FTBS.js"
import { solve_FTCS } from "./FTCS.js"
require('pyextjs')

// solves 1D PDE
// array: array to iterate over
// scheme: scheme to iterate with
// dt: timestep
// dx: space step in x direction
// nt: number of timestep to iterate
export const solver1D = (array, scheme, params, experiment) => {
	const {
		dt,
		dx,
		nt,
		c,
		nu
	} = params

	u = solve_FTBS._1D(array, scheme, nt, dt, dx, c)

	return u
}

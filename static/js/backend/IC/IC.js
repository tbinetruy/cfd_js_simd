import { Parser } from "expr-eval"

import { solutions } from "../solutions/solutions.js"

export const computeIC_1D = {
	hat: (y, dx) => {
		return y.map( (y_i, i) => {
			if(i >= Math.floor(0.5 / dx) && i <= Math.floor(1 / dx + 1))
				return 2 
			else
				return 1
		})
	},
	burgers: (y, dx) => {
		// paramters
		const nx = 101
		const nt = 100
		dx = 2 * Math.PI / (nx - 1)
		const nu = .07
		const dt = dx * nu
		const t = 0

		// solve analytically for y_0
		const y_0 = solutions.burgers._1D(nx, t, nu)

		
		return y_0
	}
}

import { Parser } from "expr-eval"

import { solutions } from "../solutions/solutions.js"

export const computeIC_1D = {
	hat: (y, dx) => {
		return y.map( (y_i, i) => {
			if(i >= Math.floor(0.5 / dx) && i <= Math.floor(1 / dx + 1))
				return 1 
			else
				return 0
		})
	},
	burgers: (y, params) => {
		// paramters
		const {
			nx,
			nt,
			dx,
			dt,
			nu
		} = params
		const t = 0

		// solve analytically for y_0
		const y_0 = solutions.burgers._1D(nx, t, nu)

		
		return y_0
	}
}

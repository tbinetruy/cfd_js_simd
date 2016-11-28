import Algebrite from "algebrite"
import math from "mathjs"

import { Parser } from "expr-eval"

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
		// analytical solution
		const a = Algebrite
		const phi = "exp(-(x - 4 * t)^2 / (4 * nu * (t + 1))) + exp(-(x - 4 * t - 2 * 3.14159)^2 / (4 * nu * (t + 1)))"
		const phiprime = a.derivative(phi, 'x').toString()
		const u = "-2 * nu * ( ("+phiprime+") / ("+phi+")) + 4"

		// paramters
		const nx = 101
		const nt = 100
		dx = 2 * Math.PI / (nx - 1)
		const nu = .07
		const dt = dx * nu
		const t = 0

		// solve for y_0
		let x_0 = numpy.linspace(0, 2 * Math.PI, nx)

		// evaluate only "x" in .map() to accelerate
		const u_sub = a.eval(a.eval(u, "t", t).toString(), "nu", nu).toString()
		const y_0 = x_0.map( (x_i, i) => {
			const y = math.eval(a.eval(u_sub, "x", x_i).toString())
			return y
		}) 
		
		return y_0
	}
}

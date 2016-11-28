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
		const phi = "exp(-(x - 4 * t)^2 / (4 * nu * (t + 1))) + exp(-(x - 4 * t - 2 * 3.14159)^2 / (4 * nu * (t + 1)))"
		const phiprime = Algebrite.derivative(phi, 'x').toString()
		const u = "-2 * nu * ( ("+phiprime+") / ("+phi+")) + 4"
		const a = Algebrite
		const y_analytical = (t, x, nu) => {
			const e = math.eval(a.eval(a.eval(a.eval(u, "t", t).toString(), "x", x).toString(), "nu", nu).toString())

			return e
		}

		const nx = 101
		const nt = 100
		dx = 2 * Math.PI / (nx - 1)
		const nu = .07
		const dt = dx * nu

		let x_0 = numpy.linspace(0, 2 * Math.PI, nx)
		const t = 0

		const y_0 = x_0.map( (x_i, i) => {
			const y = y_analytical(t, x_i, nu) 

			return y
		}) 
		
		return { y_analytical, y_0, y }
	}
}

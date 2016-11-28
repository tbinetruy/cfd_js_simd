import Algebrite from "algebrite"
import math from "mathjs"

export const burgers = {
	_1D: (nx, t, nu) => {
		const a = Algebrite
		const phi = "exp(-(x - 4 * t)^2 / (4 * nu * (t + 1))) + exp(-(x - 4 * t - 2 * 3.14159)^2 / (4 * nu * (t + 1)))"
		const phiprime = a.derivative(phi, 'x').toString()
		const y = "-2 * nu * ( ("+phiprime+") / ("+phi+")) + 4"

		let x = numpy.linspace(0, 2 * Math.PI, nx)

		// evaluate only "x" in .map() to accelerate
		const y_sub = a.eval(a.eval(y, "t", t).toString(), "nu", nu).toString()
		const y_t = x.map( (x_i, i) => {
			const y_i = math.eval(a.eval(y_sub, "x", x_i).toString())

			return y_i
		}) 

		return y_t
	}
}

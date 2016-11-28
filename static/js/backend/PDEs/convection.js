import { FTBS } from "../schemes/FTBS/FTBS.js"

export const convection = {
	linear: {
		_1D: (u, u_i, i, dt, dx, c) => FTBS._1D.linearConv(u, u_i, i, dt, dx, c)
	},
	nonLinear: {
		_1D: (u, u_i, i, dt, dx, c) => FTBS._1D.nonLinearConv(u, u_i, i, dt, dx, c)
	},
}

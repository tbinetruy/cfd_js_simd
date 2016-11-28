import { schemes } from "../schemes/schemes.js"

export const convection = {
	linear: {
		_1D: (u, u_i, i, dt, dx, c) => schemes.FT._1D.linear(u, u_i, i) - c * dt / dx * schemes.BS._1D.linear(u, u_i, i)
	},
	nonLinear: {
		_1D: (u, u_i, i, dt, dx, c) => schemes.FT._1D.linear(u, u_i, i) - u_i * dt / dx * schemes.BS._1D.linear(u, u_i, i)
	},
}

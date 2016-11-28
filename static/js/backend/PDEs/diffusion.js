import { schemes } from "../schemes/schemes.js"

export const diffusion = {
	_1D: (u, u_i, i, dt, dx, nu) => schemes.FT._1D.linear(u_i) + nu * dt / Math.pow(dx, 2) * schemes.CS._1D.linear(u, u_i, i)
}

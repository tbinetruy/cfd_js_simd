import { FTCS } from "../schemes/FTCS/FTCS.js"

export const diffusion = {
	_1D: (u, u_i, i, dt, dx, c) => FTCS._1D.diffusion(u, u_i, i, dt, dx, c)
}

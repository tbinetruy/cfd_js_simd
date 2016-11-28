import { schemes } from "../schemes/schemes.js"
import { PDEs } from "../PDEs/PDEs.js"

export const burgers = {
	_1D: (u, u_i, i, dt, dx, nu) => schemes.FT._1D.linear(u_i) - u_i * dt / dx * schemes.BS._1D.linear(u, u_i, i) + nu * dt / Math.pow(dx, 2) * schemes.CS._1D.linear(u, u_i, i),
}

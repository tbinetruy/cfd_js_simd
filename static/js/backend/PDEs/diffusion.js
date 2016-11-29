import { schemes } from "../schemes/schemes.js"

export const diffusion = {
	_1D: (u, u_i, i, dt, dx, nu) => schemes.explicit.euler.forwardTime._1D(u, u_i, i) + nu * dt / Math.pow(dx, 2) * schemes.explicit.euler.centeredSpace._1D(u, u_i, i)
}

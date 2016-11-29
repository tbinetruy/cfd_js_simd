import { schemes } from "../schemes/schemes.js"

export const convection = {
	linear: {
		_1D: (u, u_i, i, dt, dx, c) => schemes.explicit.euler.forwardTime._1D(u, u_i, i) - c * dt / dx * schemes.explicit.euler.backwardSpace._1D(u, u_i, i)
	},
	nonLinear: {
		_1D: (u, u_i, i, dt, dx, c) => schemes.explicit.euler.forwardTime._1D(u, u_i, i) - u_i * dt / dx * schemes.explicit.euler.backwardSpace._1D(u, u_i, i)
	},
}

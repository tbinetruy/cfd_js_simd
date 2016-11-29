import { schemes } from "../schemes/schemes.js"

export const convection = {
	explicit: {
		_1D: (u, u_i, i, dt, dx, c) => schemes.explicit.euler.forwardTime._1D(u, u_i, i) - c * dt / dx * schemes.explicit.euler.backwardSpace._1D(u, u_i, i)
	},
	implicit : {
		_1D: (dx, dt, nu, c) => {
			return {
				ud: schemes.implicit.euler.backwardTime._1D(dx, dt, c).ud + schemes.implicit.euler.backwardSpace._1D(dx, dt, c).ud,
				d: schemes.implicit.euler.backwardTime._1D(dx, dt, c).d + schemes.implicit.euler.backwardSpace._1D(dx, dt, c).d,
				ld: schemes.implicit.euler.backwardTime._1D(dx, dt, c).ld + schemes.implicit.euler.backwardSpace._1D(dx, dt, c).ld,
			}
		}
	}
}

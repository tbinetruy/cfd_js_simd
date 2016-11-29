import { schemes } from "../schemes/schemes.js"

export const diffusion = {
	explicit: {
		_1D: (u, u_i, i, dt, dx, nu) => schemes.explicit.euler.forwardTime._1D(u, u_i, i) + nu * dt / Math.pow(dx, 2) * schemes.explicit.euler.centeredSpace._1D(u, u_i, i)
	},
	implicit : {
		_1D: (dx, dt, nu, c) => {
			return {
				ud: schemes.implicit.euler.backwardTime._1D(Math.pow(dx, 2), dt, nu).ud - schemes.implicit.euler.centeredSpace._1D(Math.pow(dx, 2), dt, nu).ud,
				d: schemes.implicit.euler.backwardTime._1D(Math.pow(dx, 2), dt, nu).d - schemes.implicit.euler.centeredSpace._1D(Math.pow(dx, 2), dt, nu).d,
				ld: schemes.implicit.euler.backwardTime._1D(Math.pow(dx, 2), dt, nu).ld - schemes.implicit.euler.centeredSpace._1D(Math.pow(dx, 2), dt, nu).ld,
				d_last: schemes.implicit.euler.backwardTime._1D(Math.pow(dx, 2), dt, nu).d - schemes.implicit.euler.centeredSpace._1D(Math.pow(dx, 2), dt, nu).d_last
			}
		}
	}
}

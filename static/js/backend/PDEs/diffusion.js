import { schemes } from "../schemes/schemes.js"

export const diffusion = {
	explicit: {
		_1D: (u, u_i, i, dt, dx, nu) => schemes.explicit.forwardTimeEuler._1D(u, u_i, i) + nu * dt / Math.pow(dx, 2) * schemes.explicit.centeredSpaceEuler._1D(u, u_i, i)
	},
	implicit : {
		_1D: (dx, dt, nu, c) => {
			return {
				ud: schemes.implicit.backwardTimeEuler._1D(Math.pow(dx, 2), dt, nu).ud - schemes.implicit.centeredSpaceEuler._1D(Math.pow(dx, 2), dt, nu).ud,
				d: schemes.implicit.backwardTimeEuler._1D(Math.pow(dx, 2), dt, nu).d - schemes.implicit.centeredSpaceEuler._1D(Math.pow(dx, 2), dt, nu).d,
				ld: schemes.implicit.backwardTimeEuler._1D(Math.pow(dx, 2), dt, nu).ld - schemes.implicit.centeredSpaceEuler._1D(Math.pow(dx, 2), dt, nu).ld,
				d_last: schemes.implicit.backwardTimeEuler._1D(Math.pow(dx, 2), dt, nu).d - schemes.implicit.centeredSpaceEuler._1D(Math.pow(dx, 2), dt, nu).d_last
			}
		}
	}
}

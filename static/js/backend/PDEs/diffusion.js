import { schemes } from "../schemes/schemes.js"

export const diffusion = {
	explicit: {
		_1D: (u, u_i, i, dt, dx, nu) => {
			const params = {
				y: u,
				y_i: u_i,
				i,
				c: nu,
				dx, 
				dt
			}

			return schemes.explicit.forwardTimeEuler._1D(params) + nu * dt / Math.pow(dx, 2) * schemes.explicit.centeredSpaceEuler._1D(params)
		}
	},
	implicit : {
		_1D: (dx, dt, nu, c) => {
			return {
				ud: schemes.implicit.backwardTimeEuler._1D(dx, dt, nu).ud - schemes.implicit.centeredSpaceEuler._1D(dx, dt, nu).ud,
				d: schemes.implicit.backwardTimeEuler._1D(dx, dt, nu).d - schemes.implicit.centeredSpaceEuler._1D(dx, dt, nu).d,
				ld: schemes.implicit.backwardTimeEuler._1D(dx, dt, nu).ld - schemes.implicit.centeredSpaceEuler._1D(dx, dt, nu).ld,
			}
		}
	}
}

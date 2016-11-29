import { schemes } from "../schemes/schemes.js"

export const diffusion = {
	explicit: {
		_1D: (u, u_i, i, dt, dx, nu) => schemes.explicit.euler.forwardTime._1D(u, u_i, i) + nu * dt / Math.pow(dx, 2) * schemes.explicit.euler.centeredSpace._1D(u, u_i, i)
	},
	implicit : {
		_1D: sigma => {
			return {
				ud: schemes.implicit.euler.backwardTime._1D().ud + schemes.implicit.euler.centeredSpace._1D(sigma).ud,
				d: schemes.implicit.euler.backwardTime._1D().d + schemes.implicit.euler.centeredSpace._1D(sigma).d,
				ld: schemes.implicit.euler.backwardTime._1D().ld + schemes.implicit.euler.centeredSpace._1D(sigma).ld,
			}
		}
	}
}

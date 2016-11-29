import { schemes } from "../schemes/schemes.js"

export const convection = {
	explicit: {
		_1D: (u, u_i, i, dt, dx, c) => schemes.explicit.euler.forwardTime._1D(u, u_i, i) - c * dt / dx * schemes.explicit.euler.backwardSpace._1D(u, u_i, i)
	},
	implicit : {
		_1D: sigma => {
			return {
				ud: schemes.implicit.euler.backwardTime._1D().ud + schemes.implicit.euler.backwardSpace._1D(sigma).ud,
				d: schemes.implicit.euler.backwardTime._1D().d + schemes.implicit.euler.backwardSpace._1D(sigma).d,
				ld: schemes.implicit.euler.backwardTime._1D().ld + schemes.implicit.euler.backwardSpace._1D(sigma).ld,
			}
		}
	}
}

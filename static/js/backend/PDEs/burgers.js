import { schemes } from "../schemes/schemes.js"
import { PDEs } from "../PDEs/PDEs.js"

export const burgers = {
	explicit: {
		_1D: (u, u_i, i, dt, dx, nu, BC_type) => schemes.explicit.euler.forwardTime._1D(u, u_i, i, BC_type) - u_i * dt / dx * schemes.explicit.euler.backwardSpace._1D(u, u_i, i, BC_type) + nu * dt / Math.pow(dx, 2) * schemes.explicit.euler.centeredSpace._1D(u, u_i, i, BC_type),
	},
	implicit : {
		_1D: sigma => {

		}
	}
}

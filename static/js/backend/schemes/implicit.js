export const implicit = {
	backwardTimeEuler: {
		_1D: (dx, dt, c)  => {
			const sigma = c * dt / dx
			return {
				ld: 0,
				d: 1,
				ud: 0
			}
		}
	},
	centeredSpaceEuler: {
		_1D: (dx, dt, c) => {
			const sigma = c * dt / Math.pow(dx, 2)
			return {
				ld: sigma,
				d: -(2 * sigma),
				d_last: -sigma,
				ud: sigma
			}
		}
	},
	backwardSpaceEuler: {
		_1D: (dx, dt, c) => {
			const sigma = c * dt / dx
			return {
				ld: -sigma,
				d: (sigma),
				ud: 0,
			}
		}
	}
}

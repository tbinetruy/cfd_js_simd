export const implicit = {
	euler: {
		backwardTime: {
			_1D: (dx, dt, c)  => {
				const sigma = c * dt / dx
				return {
					ld: 0,
					d: 1,
					ud: 0
				}
			}
		},
		centeredSpace: {
			_1D: (dx, dt, c) => {
				const sigma = c * dt / dx
				return {
					ld: sigma,
					d: -(2 * sigma),
					d_last: -sigma,
					ud: sigma
				}
			}
		},
		backwardSpace: {
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
}

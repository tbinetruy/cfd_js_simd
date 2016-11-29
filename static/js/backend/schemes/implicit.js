export const implicit = {
	euler: {
		backwardTime: {
			_1D: (dx, dt, c)  => {
				const sigma = c * dt / dx
				//console.log(sigma)
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
				console.log(c)
				//console.log(sigma)
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
				//console.log(dx, dt, c)
				//console.log(sigma);
				return {
					ld: -sigma,
					d: (sigma),
					ud: 0,
				}
			}
		}
	}
}

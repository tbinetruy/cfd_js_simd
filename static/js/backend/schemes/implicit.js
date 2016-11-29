export const implicit = {
	euler: {
		backwardTime: {
			_1D: () => {
				return {
					ld: 0,
					d: 1,
					ud: 0
				}
			}
		},
		centeredSpace: {
			_1D: sigma => {
				return {
					ld: -1,
					d: 1 + 1 / sigma,
					ud: -1
				}
			}
		},
		backwardSpace: {
			_1D: sigma => {
				return {
					ld: -1,
					d: 1 / sigma,
					ud: 0
				}
			}
		}
	}
}

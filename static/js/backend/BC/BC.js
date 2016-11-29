export const BC = {
	dirichlet: {
		explicit: {
		},
		implicit: {
			euler: c => {
				return {
					b_d: c,				// how to modify entry on b
				}
			}
		}
	},
	neumann: {
		explicit: {

		},
		implicit: {
			euler: (q, dx) => {
				return {
					A_n: -1,				// how to modify entry on diag(A)
					b_n: qdx,				// how to modify entry on b
				}
			}
		}
	}
}

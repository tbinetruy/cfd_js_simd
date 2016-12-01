export const BC = {
	dirichlet: {
		explicit: {
			euler: c => c
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
			euler: (q, dx) => q*dx
		},
		implicit: {
			euler: (q, dx) => {
				const b_n = q*dx
				return {
					A_n: -1,				// how to modify first and last on diag(A)
					b_n: q*dx,				// how to modify entry on b
				}
			}
		}
	}
}

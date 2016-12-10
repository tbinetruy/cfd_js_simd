export const BC = {
	dirichlet: {
		explicit: {
			FDM: {
				euler: c => c
			},
			FVM: {

			},
		},
		implicit: {
			FDM: {
				euler: c => {
					return {
						b_d: c,				// how to modify entry on b
					}
				}
			},
			FVM: {

			}
		}
	},
	neumann: {
		explicit: {
			FDM: {
				euler: (q, dx) => q*dx
			},
			FVM: {

			}
		},
		implicit: {
			FDM: {
				euler: (q, dx) => {
					const b_n = q*dx
					return {
						A_n: -1,				// how to modify first and last on diag(A)
						b_n: q*dx,				// how to modify entry on b
					}
				}
			},
			FVM: {

			}
		}
	}
}

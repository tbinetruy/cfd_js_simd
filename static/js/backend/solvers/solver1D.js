require('pyextjs')

// solves 1D PDE
// array: array to iterate over
// scheme: scheme to iterate with
// dt: timestep
// dx: space step in x direction
// nt: number of timestep to iterate
export const solver1D = (array, scheme, dt, dx, nt, c) => {
	let u = [...array]
	let u_temp = numpy.ones(u.length)

	for(let n = 0; n <= nt; n++) {
		u_temp = [...u]

		u = u_temp.map((u_i, i) => {
			if(i > 0)
				return scheme(u_temp, u_i, i, dt, dx, c)
			else
				return u_i
		})
	}

	return u
}

const BS_1D = {
	linear: (u, u_i, i) => {
		return u_i - u[i-1]
	}
}

export const BS = {
	_1D: BS_1D
}

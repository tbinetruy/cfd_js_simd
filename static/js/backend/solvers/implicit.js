import numeric from "numeric"

export const implicit = {
	_1D: (array, scheme, params, BC) => {
		const { nt, dt, dx, sigma } = params
		const y_0 = [...array]
		const nu = params.nu
		const alpha = params.c

		const generateMatrix = (N) => {

			let A_0 = numeric.diag(numpy.ones(N-2).map( e => e*(scheme(dx, dt, nu, alpha).d)))	
			let A = [...A_0]

			A_0.map( 
				(e, r) => e.map(
					(e, c) => {
						if(r === 0 && c === 0) {
							A[r][r+1] = scheme(dx, dt, nu, alpha).ud
						} else if(r === A.length - 1 && c === A.length - 1) {
							A[r][r-1] = scheme(dx, dt, nu, alpha).ld
							//A[r][r] = 1 scheme(dx, dt, nu, alpha).d_last
							console.log(A[r][r]);
						} else if(r === c && (r !== 0 && r !== A.length - 1)) {
							A[r][r-1] = scheme(dx, dt, nu, alpha).ld
							A[r][r+1] = scheme(dx, dt, nu, alpha).ud
						}
					}
				)
			)
			console.log(A, scheme)
			return A
		}

		const generateRHS = y => {
			let RHS = y.map( (e, i) => e)
			RHS.splice(RHS.length-1, 1)
			RHS.splice(0, 1)

			//RHS[0] += y[0]
			//RHS[RHS.length - 1] += y[y.length - 1]

			return RHS
		}

		const A = generateMatrix(y_0.length)
		let y_00 = numpy.ones(params.nx)
		let y = [...y_0]
		for(let i = 0; i < nt; i++) {
			let y_temp = [].concat(y)
			// y_temp = y.map( e => e < 1 ? 1 : e)
			const b = generateRHS(y_temp)
			
			const y_interior = numeric.solve(A, b)
			y = [...y_interior]
			y.unshift(y_0[0])
			y.push(y_0[y_0.length-1])
		}
		console.log(y)
		return y
	}
}

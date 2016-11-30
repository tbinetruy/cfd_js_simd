import numeric from "numeric"
import { BC as getBC } from "../BC/BC.js"

export const implicit = {
	_1D: (array, scheme, params, BC) => {
		const { nt, dt, dx } = params
		const y_0 = [...array]
		const nu = params.nu
		const alpha = params.c

		let sigma = alpha * dt / Math.pow(dx,2)
		if(params.experiment <= 2)
			sigma *= dx

		const generateMatrix = (N) => {

			let A_0 = numeric.diag(numpy.ones(N-2).map( e => e*(scheme(dx, dt, nu, alpha).d)))	
			let A = [...A_0]


			A_0.map( 
					(e, r) => {
						if(r === 0) {
							A[r][r+1] = scheme(dx, dt, nu, alpha).ud

							if(BC.neumann)
								if(BC.neumann.west)
									A[r][r] += getBC.neumann.implicit.euler(BC.neumann.west, dx).A_n
						} else if(r === A.length - 1) {
							A[r][r-1] = scheme(dx, dt, nu, alpha).ld

							if(BC.neumann)
								if(BC.neumann.east)
									A[r][r] += getBC.neumann.implicit.euler(BC.neumann.east, dx).A_n
						} else if(r !== 0 && r !== A.length - 1) {
							A[r][r-1] = scheme(dx, dt, nu, alpha).ld
							A[r][r+1] = scheme(dx, dt, nu, alpha).ud
						}
					}
				)
			console.log(A, scheme)
			return A
		}

		const generateRHS = y => {
			let RHS = y.map( (e, i) => {
				if(i === 1)
					e += sigma * getBC.neumann.implicit.euler(BC.neumann.west, dx).b_n
				
				if(i === y.length - 2)
					e += sigma * getBC.neumann.implicit.euler(BC.neumann.east, dx).b_n

				if( i === 1)
					e += sigma * getBC.dirichlet.implicit.euler(BC.dirichlet.west, dx).b_d
				
				if(i === y.length - 2)
					e += sigma * getBC.dirichlet.implicit.euler(BC.dirichlet.east, dx).b_d

				return e
			})
			RHS.splice(RHS.length-1, 1)
			RHS.splice(0, 1)

			//RHS[0] += y[0]
			//RHS[RHS.length - 1] += y[y.length - 1]

			return RHS
		}

		const A = generateMatrix(y_0.length)
		let y = [...y_0]
		y[0] = BC.dirichlet.west
		y[y.length-1] = BC.dirichlet.east
		for(let i = 0; i < nt; i++) {
			let y_temp = [].concat(y)
			// y_temp = y.map( e => e < 1 ? 1 : e)
			const b = generateRHS(y_temp)
			
			const y_interior = numeric.solve(A, b)
			y = [...y_interior]
			y.unshift(y_0[0])
			y.push(y_0[y_0.length-1])
			const foo = y[y.length-2] + sigma * getBC.neumann.implicit.euler(BC.neumann.east, dx).b_n

			y[y.length-1] = foo
			//y[0] = y[1] - sigma * getBC.neumann.implicit.euler(BC.neumann.west, dx)
		}
		console.log(y)
		return y
	}
}

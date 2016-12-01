import numeric from "numeric"
import { BC as getBC } from "../BC/BC.js"

export const implicit = {
	_1D: (array, scheme, params, BC) => {
		const { nt, dt, dx } = params
		const y_0 = [...array]
		const nu = params.nu
		const alpha = params.c;

		let sigma = alpha * dt / Math.pow(dx,2)
		if(params.experiment <= 2)
			sigma = alpha * dt / dx

		const generateMatrix = (N) => {

			let A_0 = numeric.diag(numpy.ones(N-2).map( e => e*(scheme(dx, dt, nu, alpha).d)))	
			let A = [...A_0]

			A_0.map( 
					(e, r) => {
						if(r === 0) {
							A[r][r+1] = scheme(dx, dt, nu, alpha).ud

							if(!BC.dirichlet.west)
								A[r][r] += sigma * getBC.neumann.implicit.euler(BC.neumann.west, dx).A_n
						} else if(r === A.length - 1) {
							A[r][r-1] = scheme(dx, dt, nu, alpha).ld

							if(!BC.dirichlet.east)
								A[r][r] += sigma * getBC.neumann.implicit.euler(BC.neumann.east, dx).A_n
						} else if(r !== 0 && r !== A.length - 1) {
							A[r][r-1] = scheme(dx, dt, nu, alpha).ld
							A[r][r+1] = scheme(dx, dt, nu, alpha).ud
						}
					}
				)

			return A
		}

		const generateRHS = y => {
			let RHS = y.map( (e, i) => e )

			RHS.splice(RHS.length-1, 1)
			RHS.splice(0, 1)

			RHS[0] += sigma * getBC.dirichlet.implicit.euler(BC.dirichlet.west, dx).b_d
			RHS[0] += sigma * getBC.neumann.implicit.euler(BC.neumann.west, dx).b_n
			RHS[RHS.length-1] += sigma * getBC.dirichlet.implicit.euler(BC.dirichlet.east, dx).b_d
			RHS[RHS.length-1] += sigma * getBC.neumann.implicit.euler(BC.neumann.east, dx).b_n

			return RHS
		}

		const A = generateMatrix(y_0.length)

		if(BC.dirichlet.west)
			y_0[0] = sigma*BC.dirichlet.west
		if(BC.dirichlet.east)
			y_0[y_0.length-1] = sigma*BC.dirichlet.east
			
		let y = [...y_0]
		for(let i = 0; i < nt; i++) {
			let y_temp = [].concat(y)
			// y_temp = y.map( e => e < 1 ? 1 : e)
			const b = generateRHS(y_temp)
			
			const y_interior = numeric.solve(A, b)
			y = [...y_interior]
			y.unshift(y_temp[0])
			y.push(y_temp[y.length-1])
			
			y[0] = y[1]
			y[y.length - 1] = y[y.length - 2]

			// neumann BC
			if(BC.neumann.west)
				y[0] += getBC.neumann.implicit.euler(BC.neumann.west, dx).b_n
			if(BC.neumann.east)
				y[y.length - 1] += getBC.neumann.implicit.euler(BC.neumann.east, dx).b_n
			// dirichlet bc: override Neumann
			if(BC.dirichlet.west)
				y[0] = getBC.dirichlet.implicit.euler(BC.dirichlet.west, dx).b_d 
			if(BC.dirichlet.east)
				y[y.length - 1] = getBC.dirichlet.implicit.euler(BC.dirichlet.east, dx).b_d 
		}

		return y
	}
}

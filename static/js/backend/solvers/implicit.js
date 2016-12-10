import numeric from "numeric"
import { BC as getBC } from "../BC/BC.js"
import { PDEs } from "../PDEs/PDEs.js"
import { getScheme } from "../app_config.js"

export const implicit = {
	_1D: (y_0, solverConfig, PDEterms, BC) => {
		const { nt, dt, dx } = solverConfig 
		y_0 = [...y_0]


		const schemeFunc = PDEs.discretizePDE.implicit._1D

		const generateMatrix = (N) => {
			const A = numeric.diag(numpy.ones(N-2).map( e => 0 ))

			for(let i = 0; i < PDEterms.length; i++) {
				const scheme = schemeFunc(solverConfig, PDEterms, { dx, dt, c: PDEterms[i].c }) 

				let sigma = PDEterms[i].c* dt / dx
				if(PDEterms[i].scheme === getScheme[2])
					sigma = PDEterms[i].c * dt / Math.pow(dx,2)

				// filling main diag
				const A_copy = [...A]
				
				// we will map over A_0 to modify A array (data integrity)
				// let A = [...A_0]
		
				// filling central diag and dealing with BC
				A_copy.map( 
					(e, r) => {
						A[r][r] += scheme.d

						if(r === 0) {
							A[r][r+1] += scheme.ud

							if(!BC.dirichlet.west)
								A[r][r] += sigma * getBC.neumann.implicit.euler(BC.neumann.west, dx).A_n
						} else if(r === A.length - 1) {
							A[r][r-1] += scheme.ld

							if(!BC.dirichlet.east)
								A[r][r] += sigma * getBC.neumann.implicit.euler(BC.neumann.east, dx).A_n
						} else if(r !== 0 && r !== A.length - 1) {
							A[r][r-1] += scheme.ld
							A[r][r+1] += scheme.ud
						}
					}
				)
			}

			return A
		}

		const generateRHS = y => {
			// copy array
			let RHS = y.map( (e, i) => e )

			// only consider y_interior
			RHS.splice(RHS.length-1, 1)
			RHS.splice(0, 1)

			// BC
			let sigma_0 = 0
			let sigma_tot = 0

			for(let i = 0; i < PDEterms.length; i++) {
				let sigma = PDEterms[i].c* dt / dx
				if(PDEterms[i].scheme === getScheme[2])
					sigma = PDEterms[i].c * dt / Math.pow(dx,2)

				sigma_0 += sigma
				sigma_tot += sigma
			}
				
			RHS[0] += sigma_0 * getBC.dirichlet.implicit.euler(BC.dirichlet.west, dx).b_d
			RHS[0] += sigma_0 * getBC.neumann.implicit.euler(BC.neumann.west, dx).b_n
			RHS[RHS.length-1] += sigma_tot * getBC.dirichlet.implicit.euler(BC.dirichlet.east, dx).b_d
			RHS[RHS.length-1] += sigma_tot * getBC.neumann.implicit.euler(BC.neumann.east, dx).b_n

			return RHS
		}

		const A = generateMatrix(y_0.length)

		//  apply dirichlet BC
		if(BC.dirichlet.west)
			y_0[0] = getBC.dirichlet.implicit.euler(BC.dirichlet.west, dx).b_d 
		if(BC.dirichlet.east)
			y_0[y_0.length - 1] = getBC.dirichlet.implicit.euler(BC.dirichlet.east, dx).b_d 
			
		let y = [...y_0]
		for(let i = 0; i < nt; i++) {
			let y_temp = [].concat(y) // copy y

			const b = generateRHS(y) // get vector b
			const y_interior = numeric.solve(A, b) // solve system

			// upate y size
			y = [...y_interior]
			y.unshift(0)
			y.push(y_temp[0])
		}

		
		// BC: solving manually for y_outside (since system only solves y_interior)
		
		// neumann
		y[0] = y[1]
		y[y.length - 1] = y[y.length - 2]
		y[0] += getBC.neumann.implicit.euler(BC.neumann.west, dx).b_n
		y[y.length - 1] += getBC.neumann.implicit.euler(BC.neumann.east, dx).b_n

		// dirichlet
		if(BC.dirichlet.west)
			y[0] = y_0[0] 
		if(BC.dirichlet.east)
			y[y.length - 1] = y_0[y.length-1]

		return y
	}
}

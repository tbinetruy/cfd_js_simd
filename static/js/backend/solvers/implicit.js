import numeric from "numeric"

export const implicit = {
	forwardEuler: (array, scheme, params, BC) => {
		const L = 1
		const nt = 100
		const nx = 51
		const c = 0.00122
		const q = 0
		const dx = L / (nx - 1)
		const y_0 = numpy.ones(nx)

		y_0[0] = 100

		const generateMatrix = (N, sigma) => {

			console.log(numpy, numeric)
			let A_0 = numeric.diag(numpy.ones(N-2).map( e => e*(2+1/sigma)))	
			let A = [...A_0]

			A_0.map( 
				(e, r) => e.map(
					(e, c) => {
						if(r === 0 && c === 0)
							A[r][r+1] = -1
						else if(r === A.length - 1 && c === A.length - 1)
							A[r][r-1] = -1
						else if(r === c && (r !== 0 && r !== A.length - 1)){
							A[r][r-1] = -1
							A[r][r+1] = -1
						}
					}
				)
			)

			return A
		}
	}
}

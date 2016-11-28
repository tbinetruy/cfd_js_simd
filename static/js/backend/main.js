import { routine1D } from "./routine1D.js"

require('pyextjs')

onmessage = e => {
	const { experiment, nx, dt, t, c, L } = e.data
	const dx = L / (nx - 1)
	const nt = t / dt			// number of timesteps to calc

	const { u_0, u } = routine1D(experimentToString(experiment), nt, nx, dt, dx, c)

	postMessage({
		y_0: u_0,
		y: u,
		dx: dx
	})
}

const experimentToString = exp => {
	switch(exp) {
		case 1:
			return 'linearConv'
		case 2: 
			return 'nonLinearConv'
		case3:
			return 'diffusion'
		default:
			return 'linearConv'
	}
}

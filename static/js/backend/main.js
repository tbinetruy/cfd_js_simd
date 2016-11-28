import { routine1D } from "./routine1D.js"

require('pyextjs')

onmessage = e => {
	const { nx, dt, t, c, L } = e.data
	const dx = L / (nx - 1)
	const nt = t / dt			// number of timesteps to calc

	const { u_0, u } = routine1D(nt, nx, dt, dx, c)

	postMessage({
		y_0: u_0,
		y: u,
		dx: dx
	})
}


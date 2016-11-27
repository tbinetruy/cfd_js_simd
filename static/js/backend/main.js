require('pyextjs')

onmessage = e => {
	const { nx, dt, t, c, L } = e.data
	const dx = L / (nx - 1)
	const nt = t / dt			// number of timesteps to calc

	let u = numpy.ones(nx)
	const u_0 = u.map( (u_i, i) => {
		if(i >= Math.floor(0.5 / dx) && i <= Math.floor(1 / dx + 1))
			return 2 
		else
			return 1
	})

	u = u_0
	let u_temp = numpy.ones(nx)

	for(let n = 0; n <= nt; n++) {
		u_temp = [...u]

		u = u_temp.map((u_i, i) => {
			if(i > 0)
				return u_i - c * dt / dx * (u_i - u_temp[i-1]) 
			else
				return u_i
		})
	}

	postMessage({
		u_0: convertToPlotData(u_0, dx),
		u: convertToPlotData(u, dx),
	})
}

const convertToPlotData = (y, dx) => {
	return y.map( (y_i, i) => {
		return { x: i * dx, y: y_i }
	})
}

require('pyextjs')

onmessage = e => {
	const { nx, dt, t, c, L } = e.data
	const dx = L / (nx - 1)
	const nt = t / dt

	let u = numpy.ones(nx)
	const u_0 = u.map( (u_i, i) => {
		if(i >= Math.floor(0.5 / dx) && i <= Math.floor(1 / dx + 1))
			return { x: i * dx, y: 2}
		else
			return { x: i * dx, y: 1}
	})

	u = u_0

	postMessage({
		u_0: u_0,
	})
}

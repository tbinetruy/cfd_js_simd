import { routine1D } from "./routine1D.js"

require('pyextjs')

onmessage = e => {
	const { u_0, u, u_analytical, dx } = routine1D(e.data)

	postMessage({
		y_0: u_0,
		y: u,
		y_analytical: u_analytical,
		dx,
	})
}


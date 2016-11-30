export const compute_param_1D = {
	linearConv: ({ t, nx, dt, L, c, IC }) => {
		return {
			nt: t / dt,
			nx,
			dt,
			dx: L / (nx - 1),
			c,
			experiment: 1,
			IC,
		}
	},
	nonLinearConv: ({ t, nx, dt, L, c, IC }) => {
		return {
			nt: t / dt,
			nx,
			dt,
			dx: L / (nx - 1),
			c,
			experiment: 2,
			IC
		}
	},
	diffusion: ({ t, nx, L, nu = 0.3, sigma = 0.2, IC}) => {
		const dx = L / (nx - 1)
		const dt = sigma * Math.pow(dx, 2) / nu
		const nt = Math.floor(t / dt)

		return {
			nt,
			nx,
			dx,
			nu,
			dt,
			c: nu,
			experiment: 3,
			IC
		}
	},
	burgers: ({ t, nx, L, nu, IC }) => {
		const dx = 2 * Math.PI / (nx - 1)
		const dt = dx * nu
		const nt = Math.floor(t / dt)

		return {
			nt,
			nx,
			dx,
			dt,
			nu,
			c: nu,
			experiment: 4,
			IC,
		}
	}
}

export const compute_param_1D = {
	linearConv: ({ t, nx, dt, L, c }) => {
		return {
			nt: t / dt,
			nx,
			dt,
			dx: L / (nx - 1),
			c
		}
	},
	nonLinearConv: ({ t, nx, dt, L, c }) => {
		return {
			nt: t / dt,
			nx,
			dt,
			dx: L / (nx - 1),
			c
		}
	},
	diffusion: ({ t, nx, L, nu = 0.3, sigma = 0.2}) => {
		const dx = L / (nx - 1)
		const dt = sigma * Math.pow(dx, 2)
		const nt = Math.floor(t / dt)

		const a = {
			nt,
			nx,
			dx,
			nu,
			dt,
		}

		return a
	},
}

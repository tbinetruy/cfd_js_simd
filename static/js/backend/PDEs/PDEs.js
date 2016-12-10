import { convection } from "./convection.js"
import { diffusion } from "./diffusion.js"
import { burgers } from "./burgers.js"
import { schemes } from "../schemes/schemes.js"

export const discretizePDE = {
	explicit: {
		_1D: (config, PDEterms, params) => {
			let u_iplus1 = 0

			for(let i = 0; i < PDEterms.length; i++)
				u_iplus1 += schemes[config.solver][PDEterms[i].scheme][config.dim]({ ...params, c: PDEterms[i].c })

			return u_iplus1
		}
	},
	implicit: (config, PDEterms, params) => {
		_1D: (config, PDEterms, params) => {
			let ud, d, ls

			for(let i = 0; i < PDEterms.length; i++) {
				ud += schemes[config.solver][PDEterms[i].scheme][config.dim]({ ...params, c: PDEterms[i].c }).ud
				d += schemes[config.solver][PDEterms[i].scheme][config.dim]({ ...params, c: PDEterms[i].c }).d
				ld += schemes[config.solver][PDEterms[i].scheme][config.dim]({ ...params, c: PDEterms[i].c }).ld
			}

			return {
				ud,
				d,
				ls
			}
		}
	},
}

export const PDEs = {
	convection,
	diffusion,
	burgers,
	discretizePDE,
}

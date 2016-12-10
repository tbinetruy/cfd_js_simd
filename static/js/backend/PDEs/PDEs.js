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
	implicit: {
		_1D: (config, PDEterms, params) => {
			let ud = 0, d = 0, ld = 0

			for(let i = 0; i < PDEterms.length; i++) {
				const diag = schemes[config.solver][PDEterms[i].scheme][config.dim]({ ...params, c: PDEterms[i].c })
				ud += diag.ud
				d += diag.d
				ld += diag.ld
			}

			return {
				ud,
				d,
				ld
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

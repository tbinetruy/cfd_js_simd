import { convection } from "./convection.js"
import { diffusion } from "./diffusion.js"
import { burgers } from "./burgers.js"
import { schemes } from "../schemes/schemes.js"

export const discretizePDE = (config, PDEterms, params) => {
//	paramsFormat = [
//		{
//			implicit: 0,
//			euler: 0,
//			backwardTime: 0,
//			dim: 0,
//			
//		},
//	]
	let u_iplus1 = 0

	for(let i = 0; i < PDEterms.length; i++)
		u_iplus1 += schemes[config.solver][PDEterms[i].scheme][config.dim]({ ...params, c: PDEterms[i].c })

	return u_iplus1
}

export const PDEs = {
	convection,
	diffusion,
	burgers,
	discretizePDE,
}

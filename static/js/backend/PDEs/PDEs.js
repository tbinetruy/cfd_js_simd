import { convection } from "./convection.js"
import { diffusion } from "./diffusion.js"
import { burgers } from "./burgers.js"
import { schemes } from "../schemes/schemes.js"

export const createPDE = (config, PDEterms, solverType) => {
//	paramsFormat = [
//		{
//			implicit: 0,
//			euler: 0,
//			backwardTime: 0,
//			dim: 0,
//		},
//	]
//
//	schemes.implicit.euler.backwardTime._1D
//	if(solverType === 'explicit'){
//		schemes.implicit.[PDEterms[0].scheme].[PDEterms.dim]
//	}
//
//
}

export const PDEs = {
	convection,
	diffusion,
	burgers
}

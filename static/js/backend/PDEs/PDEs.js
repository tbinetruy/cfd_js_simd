import { convection } from "./convection.js"
import { diffusion } from "./diffusion.js"
import { burgers } from "./burgers.js"

// export createPDE = (config, params) => {
// 	arg = [
// 		{
// 			implicit,
// 			euler,
// 			backwardTime,
// 			dim,
// 		},
// 	]
// 
// 
// }

export const PDEs = {
	convection,
	diffusion,
	burgers
}

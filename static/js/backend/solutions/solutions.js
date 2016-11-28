import { burgers } from "./burgers.js"

export const solutions = {
	burgers: {
		_1D: (nx, t, nu) => burgers._1D(nx, t, nu),
	}
}

export const computeIC_1D = (y, dx) => {
	return y.map( (y_i, i) => {
		if(i >= Math.floor(0.5 / dx) && i <= Math.floor(1 / dx + 1))
			return 2 
		else
			return 1
	})
}

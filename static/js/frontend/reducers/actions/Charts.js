export const UPDATE_CHART1_DATA = "UPDATE_CHART1_DATA"
export const EMPTY_CHART_1 = "EMPTY_CHART_1"

export const updateChart1Data = data => {
	return {
		type: UPDATE_CHART1_DATA,
		y: data.y,
		y_0: data.y_0,
		dx: data.dx,
	}
}

export const emptyChart1 = () => {
	return {
		type: EMPTY_CHART_1
	}
}

import React from "react"
import { mapStateToProps, mapDispatchToProps } from "./containers/Chart2D.js"

export class Chart2D extends React.Component {
	componentDidMount = () => {
		const y_0 = this.convertToPlotData(this.props.data.y_0, this.props.data.dx)
		const y = this.convertToPlotData(this.props.data.y, this.props.data.dx)

		this.initChart(y_0, y)
	}

	initChart = (y_0, y) => {
		const ctx = document.getElementById(this.props.id)
		this.chart = new Chart(ctx, {
			type: 'line',
			data: {
				datasets: [
					{
						label: 'y_0',
						data: y_0, 
						borderWidth: 1,
						backgroundColor: 'rgba(0,0,255,0.3)'
					},
					{
						label: 'y',
						data: y, 
						borderWidth: 1,
						backgroundColor: 'rgba(255,0,0,0.3)'
					},
				]
			},
			xLabels: ['velocity'],
			options: {
				responsive: true,
				scales: {
					xAxes: [{
						type: "linear",
						position: "bottom",
						scaleLabel: {
							labelString: "x distance (m)",
							display: true
						}
					}],
					yAxes: [{
						scaleLabel: {
							labelString: "speed (m/s)",
							display: true
						}
					}]
				}
			}
		})
	}

	updateChart = (y_0, y, dx, props) => {
		this.chart.data.datasets[0].data = this.convertToPlotData(y_0, dx) 
		this.chart.data.datasets[1].data = this.convertToPlotData(y, dx)
		
		if(props.data.y_analytical.length > 0)
			this.chart.data.datasets.push({
				label: 'y_analytical',
				data: this.convertToPlotData(props.data.y_analytical, props.data.dx),
				borderWidth: 1,
				backgroundColor: 'rgba(0,0,0,0)'
			})
		else
			this.chart.data.datasets = this.chart.data.datasets.filter( set => set.label !== 'y_analytical' )

		this.chart.update()
	}

	convertToPlotData = (y, dx) => {
		return y.map( (y_i, i) => {
			return { x: i * dx, y: y_i }
		})
	}

	componentWillReceiveProps = nextProps => {
		const y_0 = this.convertToPlotData(nextProps.data.y_0, nextProps.data.dx)
		const y = this.convertToPlotData(nextProps.data.y, nextProps.data.dx)

		this.updateChart(y_0, y, nextProps.data.dx, nextProps)
	}

	render() {
		return (
			<div className="chart2D--wrapper">
				<div>Chart 2D</div>
				<canvas 
					id={ this.props.id }
					width="400"
					height="400">
				</canvas>
			</div>
		)
	}
}

Chart2D.propTypes = {
	id: React.PropTypes.string.isRequired,			// DOM id of canvas to draw graph in
	data: React.PropTypes.object,					// data to plot
	xLabel: React.PropTypes.string,		// x axis label
	yLabel: React.PropTypes.string,		// y axis label
}

Chart2D.getDefaultProps = {
	data: {},
	xLabel: "",
	yLabel: "",
}
// export const Chart = ReactRedux.connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(Chart_comp)

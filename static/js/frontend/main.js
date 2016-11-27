import React from "react"
import ReactDOM from "react-dom"
import Chart from "chart.js"

import { Root } from "./components/Root/Root.js"
const CFD_worker = new Worker("static/js/backend_bundle.js")

// start worker
;(function() {
	const mountPoint = document.getElementById("app-mount-point")
	ReactDOM.render(<Root />, mountPoint)

	const config = {
		nx: 61,				// number of nodes in x dir
		dt: 0.025,			// (s) timestep
		t: 1,			// (s) want solution at time t
		c: 1,				// convection constant
		L: 5,				// (m) length of mesh 
	}
	const { nx } = config
	CFD_worker.postMessage(config)

	CFD_worker.onmessage = e => {
		initChart(e.data)
	}
})()

// init chart
const initChart = function({ u_0, u }) {
	const ctx = document.getElementById("initial-state-chart");
	const initialStateChart = new Chart(ctx, {
		type: 'line',
		data: {
			datasets: [
				{
					label: 'u_0',
					data: u_0, 
					borderWidth: 1,
					backgroundColor: 'rgba(0,0,255,0.3)'
				},
				{
					label: 'u',
					data: u, 
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

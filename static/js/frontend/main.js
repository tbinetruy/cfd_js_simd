import Chart from "chart.js"

const CFD_worker = new Worker("static/js/backend_bundle.js")

// start worker
;(function() {
	const config = {
		nx: 41,				// number of nodes in x dir
		dt: 0.025,			// (s) timestep
		t: 0.625,			// (s) want solution at time t
		c: 1,				// convection constant
		L: 2,				// (m) length of mesh 
	}
	const { nx } = config
	CFD_worker.postMessage(config)

	CFD_worker.onmessage = e => {
		initChart(e.data)
	}
})()

// init chart
const initChart = function({ u_0 }) {
	const ctx = document.getElementById("initial-state-chart");
	const initialStateChart = new Chart(ctx, {
		type: 'line',
		data: {
			datasets: [{
				label: '# of Votes',
				data: u_0, 
				borderWidth: 1
			}]
		},
		options: {
			responsive: true,
			scales: {
				xAxes: [{
					type: "linear",
					position: "bottom",
				}]
			}
		}
	})
}

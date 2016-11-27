import Chart from "chart.js"

const CFD_worker = new Worker("static/js/backend_bundle.js")

// start worker
;(function() {
	CFD_worker.postMessage("hello world")

	CFD_worker.onmessage = e => {
		console.log(e.data)
	}
})()

// init chart
;(function() {
	const ctx = document.getElementById("initial-state-chart");
	const initialStateChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
			datasets: [{
				label: '# of Votes',
				data: [0, 0, 1, 1, 0, 0],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	})
})()

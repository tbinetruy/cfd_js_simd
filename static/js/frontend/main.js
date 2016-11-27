const CFD_worker = new Worker("static/js/backend_bundle.js");

(() => {
	CFD_worker.postMessage("hello world")

	CFD_worker.onmessage = e => {
		console.log(e.data)
	}
})()

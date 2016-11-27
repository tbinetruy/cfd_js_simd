onmessage = e => {
	console.log(e.data)
	postMessage("foo")
}

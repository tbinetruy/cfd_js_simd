import React from "react"
import ReactDOM from "react-dom"
import Chart from "chart.js"

import { Root } from "./components/Root/Root.js"

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

})()


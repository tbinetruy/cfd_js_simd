import React from "react"
const ReactRedux = require("react-redux")
import { store } from "../../reducers/reducers.js"
import { ConfigBar } from "../ConfigBar/ConfigBar.js"
import { ChartDiapo } from "../Charts/ChartDiapo.js"

export class Root extends React.Component {
	render() {
		return (
			<ReactRedux.Provider store={store}>
				<div id="Root--wrapper">
					<ConfigBar />
					<ChartDiapo />
				</div>
			</ReactRedux.Provider>
		)
	}
}

import React from "react"
const ReactRedux = require("react-redux")
import { store } from "../../reducers/reducers.js"

export class Root extends React.Component {
	render() {
		return (
			<ReactRedux.Provider store={store}>
				<div>HEY</div>
			</ReactRedux.Provider>
		)
	}
}

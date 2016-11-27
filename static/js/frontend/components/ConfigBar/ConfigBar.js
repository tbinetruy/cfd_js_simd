import React from "react"
import { mapStateToProps, mapDispatchToProps } from "./containers/ConfigBar.js"

var ReactRedux = require("react-redux")

export const ConfigBar = ReactRedux.connect(
	mapStateToProps,
	mapDispatchToProps
)(
	class ConfigBar extends React.Component {
		render() {
			console.log(this.props)
			return (
				<div>ConfigBar</div>
			)
		}
	}
)


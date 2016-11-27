import React from "react"
var ReactRedux = require("react-redux")
import { mapStateToProps, mapDispatchToProps } from "./containers/ChartDiapo.js"

import { Chart2D } from "./Chart2D.js"

export class ChartDiapo_comp extends React.Component {
	render = () => {
		return (
			<div id="ChartDiapo--wrapper">
				<Chart2D
					data={ this.props.chart1 }
					id="chart1"/>
			</div>
		)
	}
}
ChartDiapo_comp.propTypes = {
	chart1: React.PropTypes.object,			// chart data	
}

export const ChartDiapo = ReactRedux.connect(
	mapStateToProps,
	mapDispatchToProps
)(ChartDiapo_comp)

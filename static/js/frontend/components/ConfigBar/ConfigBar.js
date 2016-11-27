import React from "react"
import { mapStateToProps, mapDispatchToProps } from "./containers/ConfigBar.js"

const CFD_worker = new Worker("static/js/backend_bundle.js")

var ReactRedux = require("react-redux")

class ConfigBar_comp extends React.Component {
	handleChange = (e, type) => {
		switch(type) {
			case "nx":
				this.props.update_nx(parseInt(e.target.value))
				break
			case "dt":
				this.props.update_dt(parseInt(e.target.value))
				break
			case "t":
				this.props.update_t(parseInt(e.target.value))
				break
			case "c":
				this.props.update_c(parseInt(e.target.value))
				break
			case "L":
				this.props.update_L(parseInt(e.target.value))
				break
		}
	}

	submit = () => {
		const config = {
			nx: this.props.nx,
			dt: this.props.dt,
			t: this.props.t,
			c: this.props.c,	
			L: this.props.L	
		}
		const { nx } = config
		CFD_worker.postMessage(config)

		CFD_worker.onmessage = e => {
			this.props.updateChart1Data(e.data)
		}
	}

	render() {
		return (
			<div id="ConfigBar--wrapper">
				<div className="parameter-input--wrapper">
					<label>
						nx:
						<input
							type="number"
							step="1"
							value={ this.props.nx }
							onChange={ e => this.handleChange(e, 'nx') } />
					</label>
					<label>
						dt:
						<input
							type="number"
							step="any"
							value={ this.props.dt }
							onChange={ e => this.handleChange(e, 'dt') } />
					</label>
					<label>
						t:
						<input
							type="number"
							value={ this.props.t }
							step="any"
							onChange={ e => this.handleChange(e, 't') } />
					</label>
					<label>
						c:
						<input
							type="number"
							value={ this.props.c }
							onChange={ e => this.handleChange(e, 'c') } />
					</label>
					<label>
						L:
						<input
							type="number"
							value={ this.props.L }
							onChange={ e => this.handleChange(e, 'L') } />
					</label>
					<input
						value="compute"
						type="button"
						onClick={ this.submit }/>
				</div>
			</div>
		)
	}
}

ConfigBar_comp.propTypes = {
	nx: React.PropTypes.number,
	dt: React.PropTypes.number,
	c: React.PropTypes.number,
	L: React.PropTypes.number,
	t: React.PropTypes.number,

	update_nx: React.PropTypes.func,
	update_dt: React.PropTypes.func,
	update_t: React.PropTypes.func,
	update_c: React.PropTypes.func,
	update_L: React.PropTypes.func,
	updateChart1Data: React.PropTypes.func,
}

export const ConfigBar = ReactRedux.connect(
	mapStateToProps,
	mapDispatchToProps
)(ConfigBar_comp)


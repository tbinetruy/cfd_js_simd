import React from "react"
import { mapStateToProps, mapDispatchToProps } from "./containers/ConfigBar.js"

const CFD_worker = new Worker("static/js/backend_bundle.js")

var ReactRedux = require("react-redux")

class ConfigBar_comp extends React.Component {
	handleChange = (e, type) => {
		const str = e.target.value

		switch(type) {
			case "nx":
				this.props.update_nx(parseFloat(str))
				break
			case "dt":
				this.props.update_dt(parseFloat(str))
				break
			case "t":
				this.props.update_t(parseFloat(str))
				break
			case "c":
				this.props.update_c(parseFloat(str))
				break
			case "L":
				this.props.update_L(parseFloat(str))
				break
		}
	}

	submit = () => {
		const config = {
			experiment: this.props.experiment,
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

	handleDropdownChange = e => {
		this.props.update_exp(parseInt(e.target.value))
	}

	render() {
		return (
			<div id="ConfigBar--wrapper">
				<div className="parameter-input--wrapper">
					<label>
						Experiment:
						<select value={ this.props.experiment } onChange={ this.handleDropdownChange }>
							<option value={ 1 }>1D Linear Convection</option>
							<option value={ 2 }>1D Non-linear Convection</option>
							<option value={ 3 }>1D Diffusion</option>
							<option value={ 4 }>Burgers</option>
						</select>
					</label>
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
							step="0.01"
							value={ this.props.dt }
							onChange={ e => this.handleChange(e, 'dt') } />
					</label>
					<label>
						t:
						<input
							type="number"
							value={ this.props.t }
							step="0.01"
							onChange={ e => this.handleChange(e, 't') } />
					</label>
					<label>
						c:
						<input
							type="number"
							value={ this.props.c }
							step="0.01"
							onChange={ e => this.handleChange(e, 'c') } />
					</label>
					<label>
						L:
						<input
							type="number"
							value={ this.props.L }
							step="0.01"
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
	experiment: React.PropTypes.number,

	update_nx: React.PropTypes.func,
	update_dt: React.PropTypes.func,
	update_t: React.PropTypes.func,
	update_c: React.PropTypes.func,
	update_L: React.PropTypes.func,
	update_exp: React.PropTypes.func,
	updateChart1Data: React.PropTypes.func,
}

export const ConfigBar = ReactRedux.connect(
	mapStateToProps,
	mapDispatchToProps
)(ConfigBar_comp)


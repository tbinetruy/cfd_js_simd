import {
	update_nx,
	update_dt,
	update_t,
	update_c,
	update_nu,
	update_L,
	update_exp,
	update_solv,
	update_BC_type,
	update_BC,
} from "../../../reducers/actions/ConfigBar.js"

import {
	updateChart1Data,
	emptyChart1,
} from "../../../reducers/actions/Charts.js"

export const mapStateToProps = function(state) {
	return {
		nx: state.configBarReducer.nx,
		dt: state.configBarReducer.dt,
		t: state.configBarReducer.t,
		c: state.configBarReducer.c,
		nu: state.configBarReducer.nu,
		L: state.configBarReducer.L,
		experiment: state.configBarReducer.experiment,
		solver: state.configBarReducer.solver,
		BC_type: state.configBarReducer.BC_type, 	// legacy
		BC: state.configBarReducer.BC, 	
	}
}

export const mapDispatchToProps = function(dispatch) {
	return {
		update_nx: nx => dispatch(update_nx(nx)),
		update_dt: dt => dispatch(update_dt(dt)),
		update_t: t => dispatch(update_t(t)),
		update_c: c => dispatch(update_c(c)),
		update_nu: nu => dispatch(update_nu(nu)),
		update_L: L => dispatch(update_L(L)),
		update_exp: exp => dispatch(update_exp(exp)),
		update_solv: solv => dispatch(update_solv(solv)),
		emptyChart1: () => emptyChart1(),
		updateChart1Data: data => dispatch(updateChart1Data(data)),
		update_BC_type: BC_type => dispatch(update_BC_type(BC_type)),		// legacy
		update_BC: BC => dispatch(update_BC(BC_type)),
	}
}

import {
	update_nx,
	update_dt,
	update_t,
	update_c,
	update_L,
	update_exp,
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
		L: state.configBarReducer.L,
		experiment: state.configBarReducer.experiment,
	}
}

export const mapDispatchToProps = function(dispatch) {
	return {
		update_nx: nx => dispatch(update_nx(nx)),
		update_dt: dt => dispatch(update_dt(dt)),
		update_t: t => dispatch(update_t(t)),
		update_c: c => dispatch(update_c(c)),
		update_L: L => dispatch(update_L(L)),
		update_exp: exp => dispatch(update_exp(exp)),
		emptyChart1: () => emptyChart1(),
		updateChart1Data: data => dispatch(updateChart1Data(data)),
	}
}

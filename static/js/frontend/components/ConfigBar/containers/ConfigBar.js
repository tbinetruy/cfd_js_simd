export const mapStateToProps = function(state) {
	return {
		foo: state.rootReducer.foo,
	}
}

export const mapDispatchToProps = function(dispatch) {
	return {
		bar: () => dispatch({ type: 'TOOGLE_IS_MODAL_OPENED' }),
	}
}

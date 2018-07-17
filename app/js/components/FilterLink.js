import React, { Component } from "react";
import { connect } from "react-redux";

import Link from "./Link";
import { setVisibilityFilter } from "../actions";

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Link);

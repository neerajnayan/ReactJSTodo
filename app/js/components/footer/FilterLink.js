/**
 * Following implementation uses standard redux design pattern
 * to implement FooterLink
 */
import { connect } from 'react-redux';
import Link from './Link';
import { setVisibilityFilter } from '../../actions';
const mapStateProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

const FilterLink = connect(
  mapStateProps,
  mapDispatchProps
)(Link);
export default FilterLink;

/**
 * Following implementation uses react-router, so that
 * browser URL is properly updated when user clicks the link
 */
// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const FilterLink = ({filter, children}) => (
// 	<NavLink
// 	  to={filter === 'all' ? '' : filter}
// 	  activeStyle={{
// 	     textDecoration: 'none',
// 	     color: 'black'
// 	  }}
// 	>
// 	  {children}
// 	</NavLink>
// );

// export default FilterLink;



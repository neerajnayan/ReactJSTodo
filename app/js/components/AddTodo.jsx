import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};
// Connect component without any arguments, is going to generate
// container component, that is not going to subscribe to any store
// however, it will pass dispatch to the presentation-component it wraps.
export default connect()(AddTodo);
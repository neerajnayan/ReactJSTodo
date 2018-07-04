import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api/index';
import { getIsFetching } from '../reducers';

export const addTodo = (text) => (dispatch) =>
  api.addTodo(text).then(response => {
    dispatch({
      type: 'ADD_TODO_SUCCESS',
      // Check normalize package
      // https://github.com/paularmstrong/normalizr/blob/master/docs/introduction.md
      response: normalize(response, schema.todo)
    });
  });

export const toggleTodo = (id) => (dispatch) =>
  api.toggleTodo(id).then(response => {
    dispatch({
      type: 'TOGGLE_TODO_SUCCESS',
      response: normalize(response, schema.todo)
    });
  });

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

// Async Action Creator
// This method fires multiple actions based on the current state.
// Thunk middleware invoke this function passing dispatch and getState
// as its argument.
export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter
  });

  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        filter,
        // Check normalize package
        // https://github.com/paularmstrong/normalizr/blob/master/docs/introduction.md
        response: normalize(response, schema.arrayOfTodos)
      });
    },
    error => {
      dispatch({
        type: 'FETCH_TODOS_FAILURE',
        filter,
        message: error.message || 'Something went wrong'
      })
    });
}
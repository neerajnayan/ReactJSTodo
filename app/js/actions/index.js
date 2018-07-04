import { v4 } from 'node-uuid';
import * as api from '../api';

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4(),
  text
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

const requestTodos = (filter) => ({
  type: 'REQUEST_TODOS',
  filter
});

const receiveTodos = (filter, response) => ({
	type: 'RECEIVE_TODOS',
	filter,
	response
});

// Async Action Creator
// Changing this method show that it internally calls requestTodos
// and receiveTodos
export const fetchTodos = (filter) => (dispatch) => {
  dispatch(requestTodos(filter));

  return api.fetchTodos(filter).then(response => {
    dispatch(receiveTodos(filter, response));
  });
}
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

export const requestTodos = (filter) => ({
  type: 'REQUEST_TODOS',
  filter
});

const receiveTodos = (filter, response) => ({
	type: 'RECEIVE_TODOS',
	filter,
	response
});

// Async Action Creator
// This requires implementation of addPromiseSupportToDispatch in configureStore.js
export const fetchTodos = (filter) => 
  api.fetchTodos(filter).then(response => 
    receiveTodos(filter, response)
  );
import React from 'react';

import AddTodo from './AddTodo.jsx';
import TodoList from './todolist';
import Footer from './footer';

/**
 * React router makes the params available to all component
 * created by Route. Param contains the URL parameters and QSPs.
 */
const TodoApp = ({ match }) => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);

export default TodoApp;
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import TodoApp from './TodoApp';
import configureStore from '../configureStore';

const store = configureStore();

export default (
	// Uses react advanced context feature to make 
	// the store available to any components inside
	// it, including its grandchildren.
  <Provider store={store}>
  	<BrowserRouter>
    	<Route path='/' component={TodoApp} />
    </BrowserRouter>
  </Provider>
)
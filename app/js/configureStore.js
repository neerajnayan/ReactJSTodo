import { createStore, applyMiddleware } from 'redux';
// This ensure that we do not load the entire lodash module
// instead just one file inside lodash
import throttle from 'lodash/throttle';
// 3rd party middleware component to enable dispatching 
// a promise instead of an action
import promise from 'redux-promise';
// 3rd party middleware component for logging action
import { createLogger } from 'redux-logger';
import todoApp from './reducers';
import { loadState, saveState } from './localStorage';

// Both promise and logger middleware below
// are available as NPM packages. We'll use those instead of followings.
const logger = (store) => (next) => {
	if (!console.group) {
		return next;
	}
	return (action) => {
		console.group(action.type);
		console.log('%c prev state', 'color: gray', store.getState());
		console.log('%c action', 'color: blue', action);
		const returnValue = next(action);
		// Note that store.dispatch() function is synchronous
		// So, we can immediately fetch the next state
		console.log('%c next state', 'color: green', store.getState());
		console.groupEnd(action.type);
		return returnValue;
	};
};

// Utility function which enables us to dispatch
// both action or prmises that resolves to action
const promise_local = (store) => (next) => (action) => {
	// Check if action is a real object or a promise of action
	if (typeof action.then === 'function') {
		return action.then(next);
	}
	return next(action);
};

// Note that, since middleware is an array, last middleware copied to 
// store.dispatch will be invoked first. Hence, logger middleware which
// is added at the beginning of the array, will be invoked at the end, 
// which is important, because logging should be done only after all 
// promise is resolved.
const wrapDispatchWithMiddlewares = (store, middlewares) => {
	middlewares.slice().reverse().forEach((middleware) => {
		store.dispatch = middleware(store)(store.dispatch);
	});
};

const configureStore = () => {
	// Initial state of the store is going to be:
	// {
	//   todos: [],                    --> As defined by default value of state in todos reducer
	//   visibilityFilter: 'SHOW_ALL'  --> As defined by default value of state in visibilityFilter reducer
	// }
	// However, if you want to start your app with some pre-defined (Assume, you have some persisted state)
	// state, you can pass that state as the second parameter of createStore(), and it will overwrite the
	// value specified by the reducers.
	// const persistedState = {
	//   todos: [{
	//     id: '0',
	//     text: 'Welcome Back!',
	//     compeleted: false,
	//   }],
	// };
	// Alternately you can load the initial state from local storage as below
	// DO THIS IF YOU NEED TO STORE LOCALSTORAGE FOR DATA PERSISTENCE
	// const persistedState = loadState();
	// const store = createStore(todoApp, persistedState);
	
	// Creating middlewares
	const middlewares = [promise];   // Add promise middleware - promise support to dispatch
	if (process.env.NODE_ENV !== 'production') {
		// middlewares.push(logger); // Custom middleware
		middlewares.push(createLogger()); // 3rd party middleware
	}
	
	// Using custom middleware, instead if redux middleware
	// wrapDispatchWithMiddlewares(store, middlewares);

	const store = createStore(
		todoApp,
		// 2nd Parmeter - persisted state (See example above),
		// 3rd Parameter - (Enhancer)
		// Enhancers, which adds multiple middleware to
		// dispatch methods. See custom middleware implementation
		// wrapDispatchWithMiddlewares above
		applyMiddleware(...middlewares)
	);

	// Throttle from 'lodash' ensures that function passed to it
	// is not going to be called more often than 1 seconds.
	// This is to ensure that even if the store gets updated very fast
	// we do not save the state to local storage and avoid costly disk and stringify operation
	// DO THIS IF YOU NEED TO STORE LOCALSTORAGE FOR DATA PERSISTENCE
	// store.subscribe(throttle(() => {
	//   saveState({
	//     todos: store.getState().todos
	//   });
	// }, 1000));

	return store;
};

// Recommended to export configureStore, instead of store
// so, later on when you create test, you can create as many stores 
// as you want.
export default configureStore;
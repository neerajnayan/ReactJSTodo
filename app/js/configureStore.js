import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// 3rd party middleware component for logging action
import { createLogger } from 'redux-logger';
import todoApp from './reducers';

const configureStore = () => {
	// Creating middlewares
	const middlewares = [thunk];
	if (process.env.NODE_ENV !== 'production') {
		// middlewares.push(logger); // Custom middleware
		middlewares.push(createLogger()); // 3rd party middleware
	}

	const store = createStore(
		todoApp,
		// 2nd Parmeter - persisted state (See example above),
		// 3rd Parameter - (Enhancer)
		// Enhancers, which adds multiple middleware to
		// dispatch methods. See custom middleware implementation
		// wrapDispatchWithMiddlewares above
		applyMiddleware(...middlewares)
	);

	return store;
};

// Recommended to export configureStore, instead of store
// so, later on when you create test, you can create as many stores 
// as you want.
export default configureStore;
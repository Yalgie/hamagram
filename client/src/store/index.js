import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// Thunk is required if you are using async action calls
// By default redux only supports synchronous updates

// Need to manually include custom Redux Dev Tools
// Install chrome app to see redux working in your console
// https://github.com/zalmoxisus/redux-devtools-extension

import reducers from "./reducers";

const initialState = {
    auth: false,
    message: ""
}

export default createStore(
    reducers,
    { ...initialState },
    composeWithDevTools(applyMiddleware(thunk))
)
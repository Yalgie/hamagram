import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

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
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from 'redux/Reducers';

const store = createStore(
  reducers,
  undefined,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;

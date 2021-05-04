import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import reducer from '../src/reducers/reducer';
import { getImages } from './actions/actions';

const store = createStore(reducer, applyMiddleware(thunk));

// store.dispatch(getImages());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

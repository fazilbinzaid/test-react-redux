import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { fromJS } from 'immutable';

import '!!style-loader!css-loader!font-awesome/css/font-awesome.css';

import rootReducer from './src/reducer';
import App from './src/App';


const MOUNT_NODE = document.getElementById('app');
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  MOUNT_NODE
);

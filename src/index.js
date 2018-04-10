import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import CalculatorApp from './CalculatorApp';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <CalculatorApp />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

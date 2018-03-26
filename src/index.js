import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CalculatorApp from './CalculatorApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CalculatorApp />, document.getElementById('root'));
registerServiceWorker();

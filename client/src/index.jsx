import babelPolyfill from 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './components/Dashboard.js';

ReactDOM.render(<Dashboard />, document.getElementById('app'));
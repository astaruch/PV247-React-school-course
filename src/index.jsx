require.context('../public/', true);

// Enables ES7 features such as async/await in *.js/*.jsx code
import 'babel-core/register';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

import { AppWrapper } from './AppWrapper.tsx';

ReactDOM.render(<AppWrapper />, document.getElementById('app-root'));

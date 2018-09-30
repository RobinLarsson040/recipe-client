import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import './index.css';
import jsx from "./App";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();

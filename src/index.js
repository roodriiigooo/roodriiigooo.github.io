import Raven from "raven-js";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render((
<BrowserRouter>
      <App /> {/* The various pages will be displayed by the `Main` component. */}
</BrowserRouter>)
,document.getElementById('root'))
registerServiceWorker();

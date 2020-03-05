import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/dropdown.css';
import './assets/styles/icons.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import ABMDropDown from './components/Dropdown';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

export { ABMDropDown };
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Navbar from './components/Navbar'
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

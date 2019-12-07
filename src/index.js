import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './common/common.css'; 
import PhoneDirectory from './PhoneDirectory';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
ReactDOM.render(<PhoneDirectory />, document.getElementById('root'));

serviceWorker.unregister();

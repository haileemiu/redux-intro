import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
// Create Store
import {createStore} from 'redux';
// import. brings in the store to our React application
import { Provider } from 'react-redux';

// Store is the big JS object that holds all of the info for out app
const storeInstance = createStore(
  // This function is our first reducer
  // That runs every time an action is dispatched
  () => {
    console.log('I am a reducer.');
  },
);

// Wrap the App with the Provider & add a prop
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

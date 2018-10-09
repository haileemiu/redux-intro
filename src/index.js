import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
// Create Store 
import {createStore, combineReducers} from 'redux';
// import. brings in the store to our React application
import { Provider } from 'react-redux';

// Break out reducers so can use combineReducers //

 // This function is our first reducer [previously inside the storeInstance, until we needed more that one]
  // That runs every time an action is dispatched
const firstReducer = (state, action) => {
  if(action.type === 'BUTTON_ONE') {
    console.log('Button One was clicked.');
  }
  return 0;
}

const secondReducer = (state, action) => {
  if(action.type === 'BUTTON_TWO') {
    console.log('Button Two  was clicked.');
  }
  return 'two';
}

const elementListReducer = (state, action) => {
  console.log(action);
  return 1;
}

// Store is the big JS object that holds all of the info for out app
const storeInstance = createStore(
  combineReducers({
    // ES6 so basically replacing firstReducer: firstReducer
    firstReducer, 
    secondReducer,
    elementListReducer,
  }),
);

// Wrap the App with the Provider & add a prop
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Component } from 'react';
// Glue that holds everything together // QUESTION: but it was console logging before this
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        {/* dispatch is already created by React Redux  */}
        {/* You dispatch an action.  Action is an object. */}
       <button onClick={() => this.props.dispatch({type: 'BUTTON_ONE'})}>Button One</button>
       <button onClick={() => this.props.dispatch({type: 'BUTTON_TWO'})}>Button Two</button> 
       <button onClick={() => this.props.dispatch({type: 'ADD_ELEMENT', payload: 'hydrogen' })}>Add Element</button> 
      </div>
    );
  }
}
// from line 3
// technically this is a form of currying (function that returns a function )
export default connect()(App);

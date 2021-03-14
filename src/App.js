import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    debugger
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};


/*For a component to be connected to the store, i.e. to be able to 
get data from the store's internal state and to be told to re-render 
and get new data when that state changes, we will use the connect() 
function made available to us by React Redux.

 */
const mapStateToProps = (state) => {
   return {items: state.items}
}
 
export default connect(mapStateToProps)(App);

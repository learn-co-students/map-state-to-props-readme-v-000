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
    return (
      <div className="App">
        <button onClick={() => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};
 
// slice of the state to be conencted to the app component
const mapStateToProps = (state) => {
  return { items: state.items };
};
 
export default connect(mapStateToProps)(App);
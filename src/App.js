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
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { items: state.items }
  // (2) filters out the changes relevant to a particular component to
}

export default connect(mapStateToProps)(App);
//  (1) a function that listens to every change in the store and then 
// ...
// (3) provide to that component

// Finally this entire connect() method returns a new component, it looks like the App component we wrote, but now it also receives the correct data. This is the component we wish to export.
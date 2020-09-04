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

// specify exactly which slice of the state we want to provide to our component.
const mapStateToProps = (state) => {
  return { items: state.items };
};

// listens to every change in the store
export default connect(mapStateToProps)(App);
// returns a new component, it looks like the App component we wrote, but now it also receives the correct data. This is the component we wish to export. 

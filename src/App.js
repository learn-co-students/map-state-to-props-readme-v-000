import React, { Component } from 'react';
import { connect } from 'react-redux'; /* allows us to use connect() */
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

// we are providing a new prop called items, so in our App component, that is the prop we want to reference.
const mapStateToProps = (state) => {
  return { items: state.items };
};

 // in mapStateToProps() we specify exactly which slice of the state we want to provide to our component. Here, we want to provide state.items
export default connect(mapStateToProps)(App);

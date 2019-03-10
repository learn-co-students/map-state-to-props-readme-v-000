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

// We have two goals here:
// (a) to only re-render our App component when specific changes to the state occur
// (b) to only provide our App component the slice of the state that we need

// So we will need:
// (1) a function that listens to every change in the store and then
  // The connect function is taking care of task 1 (see line 44)
// (2) filters out the changes relevant to a particular component to
  // mapStateToProps takes care of task 2 (see line 37)
// (3) provide to that component.
  // connect takes care of this with the (App) argument (see line 43)

const mapStateToProps = (state) => {
  // In mapStateToProps() we specify exactly which slice of the state we want to provide to our component.
  return { items: state.items };
  // Here, we want to provide state.items, and allow our component to have access to them through a prop called items.
  // in our mapStateToProps() function we are saying that we are providing a new prop called items, so in our App component, that is the prop we want to reference
};
// Note: We didn't have to import anything to define a mapStateToProps() function!

export default connect(mapStateToProps)(App);
// connect is synced up to our store, listening to each change in the state that occurs.
// When a change occurs, it calls a function that we write called mapStateToProps(),
// and in mapStateToProps() we specify exactly which slice of the state we want to provide to our component. (see line 37)

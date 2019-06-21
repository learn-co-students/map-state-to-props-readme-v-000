import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  handleOnClick() {
    //dispatch is automatically provided by connect if it is missing a second argument.
    //That second argument is reserved for mapDispatchToProps, which allows us to customize how we send actions to our reducer. Without the second argument we will still be able to use dispatch on any component wrapped with connect
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

// here is where we specify exactly which slice of the state we want to provide to our component
// i.e state.item, and allow our component to have access to them through a prop called items
// this isn't imported from anywhere we just wrote it ourselves
// we are sating in this function that we are providing a new prop called items, so in our App component that is the prop we want to reference
const mapStateToProps = (state) => {
  return { items: state.items };
};

// this function is synced up to our store, listens to every change in stage
// when a change occurs it calls the function we write called mapStateToProps() *above*
// Then we have to say which component in our application we are providing this data to(App in this case)
// this connect method returns a new component that looks like App component we wrote but now it
// also receives the correct data. this is the component we want to export
export default connect(mapStateToProps)(App);

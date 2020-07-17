import React, { Component } from 'react';
import { connect } from 'react-redux'; 
//For a component to be connected to the store, 
//i.e. to be able to get data from the store's internal state 
//and to be told to re-render and get new data when that state changes,
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

//export default App;

const mapStateToProps = (state) => {
  return { items: state.items };
};
 
export default connect(mapStateToProps)(App);

//The connect function is taking care of task 1, 
//  it is synced up to our store, listening to each change in the state that occurs

//When a change occurs, it calls a function that we write called mapStateToProps(), 
//  and in mapStateToProps() we specify exactly which slice of the state we want to provide to our component. 

//Here, we want to provide state.items, 
//  and allow our component to have access to them through a prop called items.

//Then we have to say which component in our application we are providing this data 
//  specify that we are connecting this state to the App component
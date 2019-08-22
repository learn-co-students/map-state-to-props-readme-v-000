import React, { Component } from 'react';
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.store.dispatch({
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

const mapStateToProps = (state) => {
  return { items: state.items };
};
 
/*So we will need (1) a function that listens to every change in the store and then 
(2) filters out the changes relevant to a particular component to 
(3) provide to that component. That's exactly what's happening here. In the next paragraph, let's go through what is doing what.
The connect function is taking care of task 1, it is synced up to our store, listening to each change in the state that occurs. 
When a change occurs, it calls a function that we write called mapStateToProps(), 
and in mapStateToProps() we specify exactly which slice of the state we want to provide to our component. 
Here, we want to provide state.items, and allow our component to have access to them through a prop called items. 
So that completes task 2. Then we have to say which component in our application we are providing this data to: 
you can see that we write connect(mapStateToProps)(App) to specify that we are connecting this state to the App component. 
Finally this entire connect() method returns a new component, it looks like the App component we wrote, but now it also receives the correct data. 
This is the component we wish to export. */ 
export default connect(mapStateToProps)(App);
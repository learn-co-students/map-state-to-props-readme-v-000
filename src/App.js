import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */
import './App.css';
 
class App extends Component {
 
  // Note : "dispatch" is automatically passed as a prop by the "Connect" component (below) -- the missing second argument (when matched with Connect), maps to a "mapDispatchToProps" function not used here
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
 
// start of code change

// Note : This function specifies which "state" information will be available to this particular component as a prop (mapping state's items to the prop "items")
const mapStateToProps = (state) => {
  return { items: state.items };
};
 
// Note : This function listens for changes in state then calls the "mapStateToProps" function (above) + links the returned state/props to the App component + generates a NEW component that works essentially the same as the specified component but has the new data available to it
export default connect(mapStateToProps)(App);

// end of code change

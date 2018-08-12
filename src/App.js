import React, { Component } from 'react';
import { connect } from 'react-redux';
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


//No imports required here, this is the function we made that links up the items and state.items
const mapStateToProps = (state) => {
  return { items: state.items };
};


//Connect allows this component to 'listen' to the state for only specific changes (like to items).
//The connection is made above when the props of this component (items) are mapped to the state.items data
export default connect(mapStateToProps)(App);


//Now, the connect function will create an App look-a-like with the ability to sense and send changes to state. 
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

/* filters out the changes relevant to a particular component -- component can access items as a prop */
const mapStateToProps = (state) => {

  return { items: state.items };
}

/* connect function synced up to our store, listening to each change in the state that occurs */
/* connect function connets state to App component -- App now receives the correct data */
export default connect(mapStateToProps)(App);

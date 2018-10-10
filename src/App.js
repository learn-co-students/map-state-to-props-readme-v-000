import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  handleOnClick() {
    this.props.store.dispatch({
      type: "INCREASE_COUNT"
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={event => this.handleOnClick()}>Click</button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
}

// start of code change
const mapStateToProps = state => {
  return { items: state.items };
};

export default connect(mapStateToProps)(App);
// end of code change

import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  handleOnClick() {
    this.props.dispatch({
      type: "INCREASE_COUNT"
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={event => this.handleOnClick()}>Click</button>
        <p>{this.props.list.length}</p>
      </div>
    );
  }
}

const mapStateToProps = props => {
  console.log(props);
  return { list: props.list };
};

export default connect(mapStateToProps)(App);

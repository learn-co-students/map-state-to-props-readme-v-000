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

// const mapStateToProps = (state) => {
//   return { items: state.items };
// };
// Interesting; const mapStateToProps = state => { items: state.items };
// doesn't work (might be because of conflicting syntax with {} - it's either an object or a block).

// However, this syntax works, according to the documentation:
const mapStateToProps = state => ({ items: state.items });

export default connect(mapStateToProps)(App);

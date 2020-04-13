import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */
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
        <button onClick={() => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
        {/* we are getting the items from props. We're able to get it through MapStateto Props function below */}
      </div>
    );
  }
};
 
// start of code change
const mapStateToProps = (state) => {
  return { items: state.items };
};
 
export default connect(mapStateToProps)(App); 
//this entire connect() method returns a new component, it looks like the App component we wrote,
// but now it also receives the correct data. This is the component we wish to export.
// end of code change
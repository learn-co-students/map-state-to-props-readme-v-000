import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

class App extends Component {

  handleOnClick = event => {
    // dispatch is automatically provided by connect if it is missing a second argument. 
    // That second argument is reserved for mapDispatchToProps, which allows us to customize 
    // how we send actions to our reducer. Without the second argument we will still be able 
    // to use dispatch on any component wrapped with connect
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    )
  }
}

// start of code change
const mapStateToProps = state => {
  return { items: state.items }
}

// connect(), allows us to specify which data we are listening to  
// (through mapStateToProps), and to which component we are providing the data
export default connect(mapStateToProps)(App)
// end of code change

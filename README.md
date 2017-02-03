### Summary

When we last left off, we successfully used our createStore method, and integrated our the method into our react application to update our state.  Unfortunately, our react application did not re-render in response to changes in the state.  In this lesson, we'll fix that.

## Use the Provider component from react-redux

The reason why the application did not re-render previously is because our react and redux library could not properly communicate to redux that a change in the store's state occurred.  Luckily, we can use the react-redux library to get react and redux talking to one another.  Run `npm install react-redux --save`.

The react-redux library gives access to a method called the provider.  The Provider is a component that comes from our react-redux library.  It wraps around our App component.  It does two things for us.  The first is that it will alert our redux app when there has been a change in state, and this will re-render our redux app.  Let's give it a shot.

Let's add the following code to our `src/index.js` file:

```javascript
import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {getShoppingListItems} from './actions/shoppingListItemActions'
import App from './App';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
   <App />
  </Provider>,
  document.getElementById('root')
);
```

We just did a few things:

* We imported `Provider` from React-Redux
* We used `Provider` to wrap our react application
* We passed our store instance into `Provider` as a prop, making it available to all of our other components.

### Step 2: Connecting The Container Component to Store

Using the `<Provider>` component provided by the react-redux, library we gave our components *the ability to be connected to the store*. However, we don't want every component re-rendering in response to every change in the state.  So the react-redux requires us to specify which changes to the store's state should prompt a re-render of the application.  We will specify this with the connect function.

#### Using the `connect` function

For a component to be connected to the store, i.e. to be able to get data from the store's internal state and to be told to re-render and get new data when that state changes, we will use the `connect` function made available to us by React-Redux.

Here's how it works:

Open up `src/App.js` and add the following:

```javascript
import {connect} from 'react-redux';
 ...

const connectedComponent = connect(mapStateToProps)(App)

function mapStateToProps(state){
  return {items: state.items}
}

export default connectedComponent;
```

Holy cow those few lines are confusing.  Let's see if we can understand them.  Remember, that we have two goals here: (a) to only re-render our App component when specific changes to the state occur, and (b) to only provide the slice of the state that we need to our App component.  So we will need (1) a function that listens to every change in the store and then (2) filters out the changes relevant to a particular component to (3) provide to that component.  That's exactly what's happening here.  In the next paragraph, let's go through what is doing what.

```javascript
  const connectedComponent = connect(mapStateToProps)(App)
```

The connect function is taking care of task 1, it is synced up to our store, listening to each change in the state that occurs.  When a change occurs, it calls a function *that we write* called mapStateToProps, and in mapStateToProps we specify exactly which slice of the state we want to provide to our component.  Here, we want to provide state.items, and allow our component to have access to them through a prop called items.  So that completes task 2.  Then we have to say which component in our application we are providing this data to: you can see that we write `connect(mapStateToProps)(App)` to specify that we are connecting this state to the App component.  

Finally this entire connect method returns a new component, it looks like the App component we wrote, but now it also receives the correct data.  This is the component we wish to export.  So at the bottom of the file, you see:

```javascript
const connectedComponent = connect(mapStateToProps)(App)

function mapStateToProps(state){
  return {items: state.items}
}

export default connectedComponent;
```
*Note: We didn't have to import anything to define a `mapStateToProps` function! We wrote that function ourselves.*

Finally, in our mapStateToProps function we are saying that we are providing a new prop called items, so in our App component, that is the prop we want to reference.  So the whole file looks like the following:

```javascript
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  handleOnClick(){
    this.props.store.dispatch({type: 'GET_COUNT_OF_ITEMS'})
  }
  render() {
    return (
      <div className="App">
          <button onClick={this.handleOnClick.bind(this)}>Click</button>
          <p> {this.props.items.length}</p>
      </div>
    );
  }
}

const connectedComponent = connect(mapStateToProps)(App)

function mapStateToProps(state){
  return {items: state.items}
}

export default connectedComponent;

```


Ok, mapStateToProps and connect is very confusing, so we'll go dig through it some more.  But for now, let's boot up our application, click the button, and see if we can finally get our application to render.  Ok, it works - our component now properly re-renders!


###Summary

We learned of two new pieces of react-redux middleware: connect and Provider.  The two pieces work hand in hand.  Provider ensures that our entire react application can potentially access data from the store.  Connect, allows us to specify which data we are listening to (through mapStateToProps), and which component we are providing the data.  So when you see lines like

```javascript
connect(mapStateToProps)(App)
function mapStateToProps(state){
  return {items: state.items}
}
```

That is saying connect the data in mapStateToProps (the items portion of the state) to the App component. And the App component can access that state with as this.props.items.  Don't fret if you still feel hazy on connect and mapStateToProps.  It simply is confusing.  We won't introduce any new material in the next code along, we'll just try to deepen our understanding of the material covered in this section.  First, please take at least a 15 minute break before moving on.  


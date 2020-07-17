import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
//The first is that Provider will alert our Redux app when there has been a change in state, 
//and this will re-render our React app. 
//gave our components the ability to be connected to the store.
import { Provider } from 'react-redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, /* code change */
  document.getElementById('root')
);


//So the React Redux library requires us to specify 
//which changes to the store's state should prompt a re-render of the application. 
//We will specify this with the connect() function (in app.js).
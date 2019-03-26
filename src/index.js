import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux' /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer'
import App from './App'
import './index.css'

const store = createStore(
  shoppingListItemReducer,
  /* access the browser to find the redux-devtool extension and */
  /* execute it so that the application can communicate with it */
  /* https://github.com/zalmoxisus/redux-devtools-extension */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  // Provider ensures that the entire React application 
  // can potentially access data from the store
  <Provider store={store}>
  	<App />
  </Provider>, /* code change */
  document.getElementById('root')
)

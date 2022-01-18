import React from 'react'
import ReactDOM from 'react-dom'

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'
import reducers from './store/reducers'

import App from './App'

const composedEnhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const store = createStore(reducers, composedEnhancer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path='/'>
        <App />
      </Route>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)

import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {combineReducers} from 'redux'
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import currentUser from './reducers/currentUser'
import userReducer from './reducers/userReducer'
import loginFormReducer from './reducers/loginFormReducer'
import rentalReducer from './reducers/rentalReducer'
import tripReducer from './reducers/tripReducer'
import reservationReducer from './reducers/reservationReducer'
import signupFormReducer from './reducers/signupFormReducer'


const reducer = combineReducers({
  users: userReducer,
  currentUser: currentUser,
  login: loginFormReducer, 
  rentals: rentalReducer, 
  trips: tripReducer,
  reservations: reservationReducer,
  signupForm: signupFormReducer
})

const composeEnhancers = ((window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose)

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>  
  </Provider>
  ,
  document.getElementById('root')
);


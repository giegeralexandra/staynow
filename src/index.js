import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import App from './App';
import rentalReducer from './reducers/rentalReducer'
import {BrowserRouter as Router} from 'react-router-dom'
import currentUser from './reducers/currentUser'
import userReducer from './reducers/userReducer'
import {combineReducers} from 'redux'
//compose combines diff middlewares into one 
//store is where you are storing your data locally
//reducers sending action object and it takes it in and deciding what to update about our current store and reducer will return a new version 

//just displaying different syntax options
const reducer = combineReducers({
  users: userReducer,
  currentUser: currentUser
})
const composeEnhancers = ((window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose)

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  //Provider allows store global to all other containers we create, any component in provider will have access to store we pass in provider
  <Provider store={store}>
    <Router>
      <App />
    </Router>  
  </Provider>
  ,
  document.getElementById('root')
);



//container component usually class components and render other components and contain other components
//the container folder specifically renders other components

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


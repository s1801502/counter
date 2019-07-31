import React from 'react';
import { connect } from 'react-redux'
import Counter from './pages/counter/counter'
import LoginPage from './pages/login-page/login-page'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from './pages/sign-up-page/sign-up'

import './App.css';

function App({ user }) {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => !user ? <LoginPage /> : <Counter />} />
          <Route exact path="/signUp" component={SignUp} />
        </Switch>
      </Router>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user.user
})



export default connect(mapStateToProps)(App)

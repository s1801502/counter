import React from 'react';
import { connect } from 'react-redux'
import Counter from './pages/counter/counter'
import Login from './pages/login-page/login'


import './App.css';

function App({ name }) {

  console.log(name)
  return (
    <div className="App">
      { !name ? <Login /> : <Counter />}
      
    </div>
  )
}

const mapStateToProps = state => ({
  name: state.user.user
})

export default connect(mapStateToProps)(App)

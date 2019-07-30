import React from 'react';
import { connect } from 'react-redux'
import Counter from './pages/counter/counter'
import LoginPage from './pages/login-page/login-page'




import './App.css';

function App({ user }) {
  
  return (
    <div className="App">
      { !user ? <LoginPage /> : <Counter />} 
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user.user
})



export default connect(mapStateToProps)(App)

import React from 'react';
import { connect } from 'react-redux'
import Counter from './pages/counter/counter'
import Login from './pages/login-page/login'




import './App.css';

function App({ user }) {

  
  
  return (
    <div className="App">
      
      { !user ? <Login /> : <Counter />}
      
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user.user
})



export default connect(mapStateToProps)(App)

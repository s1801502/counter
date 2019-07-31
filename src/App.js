import React from 'react';
import { connect } from 'react-redux'
import Counter from './pages/counter/counter'
import LoginPage from './pages/login-page/login-page'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from './pages/sign-up-page/sign-up'
import { addUser } from './redux/user/actions'
import { auth, createUserProfileDocument } from './firebase/firebase'

import './App.css';

class App extends React.Component {


  state = { displayName: '' }
  
  catchDisplayName = displayName => {
    this.setState({ displayName })
  }

  unsubFromAuth = null

  componentDidMount() {
    
    const { addUser } = this.props
    

    this.unsubFromAuth = auth.onAuthStateChanged(async userAuth => {
      

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, this.state.displayName ? this.state : {})
        this.setState({displayName: ''})

        userRef.onSnapshot(snapshot => {  
          
          addUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } 
      else {
        addUser(userAuth)
      }

    })
  }

  componentWillUnmount() {
    this.unsubFromAuth()
  }

  render() {
    const { user } = this.props
    
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={() => !user ? <LoginPage /> : <Counter />} />
            <Route exact path="/signUp" render={(props) => <SignUp catchDisplayName={this.catchDisplayName} {...props} />} />
          </Switch>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user
})

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

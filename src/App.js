import React from 'react';
import { connect } from 'react-redux'
import Counter from './pages/counter/counter'
import LoginPage from './pages/login-page/login-page'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from './pages/sign-up-page/sign-up'
import { addUser } from './redux/user/actions'
import { set } from './redux/counter/actions'
import { auth, createUserProfileDocument } from './firebase/firebase'
import { ClickEffect, Message } from './components/login-animation-styles.js/animation-styles'


import './App.css';

class App extends React.Component {

  state = {
    loginData: {
      displayName: '',
      counter: 0
    },
    isLoggedIn: false,
    show: false
  }

  toggleShow = () => {
    this.setState({show: true})
    setTimeout(() => {
      this.setState({show: false, isLoggedIn: true})
      
    }, 2000)

  }

  catchDisplayName = name => {
    this.setState({ loginData: { displayName: name }})
  }

  setIsLoggedIn = isLoggedIn => {
    this.setState({ isLoggedIn })
  }

  unsubFromAuth = null

  componentDidMount() {

    const { addUser, setCounter } = this.props

    this.unsubFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, 
          this.state.loginData.displayName ? this.state.loginData : { counter: -1 })
        
        this.toggleShow()

        userRef.onSnapshot(snapshot => {
          
          addUser({
            id: snapshot.id,
            ...snapshot.data()
          })
          setCounter(snapshot.data().counter)
        })
      }
      else {
        addUser(userAuth)
      }
    })

    this.setState({ displayName: '' })
  }

  componentWillUnmount() {
    this.unsubFromAuth()
  }

  render() {
    const { user } = this.props
    const { isLoggedIn, show } = this.state

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/"
              render={() => !isLoggedIn ? <LoginPage setIsLoggedIn={this.setIsLoggedIn}
              /> : <Counter setIsLoggedIn={this.setIsLoggedIn} />} />

            <Route exact path="/signUp" render={(props) => <SignUp catchDisplayName={this.catchDisplayName} {...props} />} />
          </Switch>
        </Router>
        <ClickEffect className={`${show && "show"}`} />
        <Message className={`${show && "show"}`}>
          { user && <span>Welcome {user.displayName}</span>}
        </Message>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user
})

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user)),
  setCounter: number => dispatch(set(number))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

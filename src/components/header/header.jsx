import React from 'react'
import { Container, Logout, SignUpContainer, Span } from './header.styles'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase'
import { removeUser } from '../../redux/user/actions'

const Header = ({ user, removeUser }) => {

    const signOut = () => {
        auth.signOut()
        removeUser()
    }
    if (user) {
        return (
            <Container>
                Welcome: {user.name}
                <Logout onClick={signOut}>Logout</Logout>
            </Container>
        )
    } else {
        return (
            <Container>
                Choose your sign in method
                <SignUpContainer>
                    <Span>New user?</Span>
                    <Logout>Sign up</Logout>
                </SignUpContainer>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.user
})

const mapDispatchToProps = dispatch => ({
    removeUser: () => dispatch(removeUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
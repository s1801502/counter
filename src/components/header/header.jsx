import React from 'react'
import { Container, Logout } from './header.styles'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase'
import { removeUser } from '../../redux/user/actions'

const Header = ({ name, removeUser }) => {

    const signOut = () => {
        auth.signOut()
        removeUser()
    }

return (
    <Container>
        Welcome: {name}
        <Logout onClick={signOut}>Logout</Logout>
    </Container>
)}

const mapStateToProps = state => ({
    name: state.user.user.name
})

const mapDispatchToProps = dispatch => ({
    removeUser: () => dispatch(removeUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
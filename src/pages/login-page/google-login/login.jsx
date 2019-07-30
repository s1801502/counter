import React from 'react'
import { Container, HeaderPrimary, HeaderSecondary, Br } from './login.styles'
import { Button } from '@tkerola/button'
import { signInWithGoogle } from '../../../firebase/firebase'
import { auth } from '../../../firebase/firebase'
import { connect } from 'react-redux'
import { addUser } from '../../../redux/user/actions'

class Login extends React.Component {

    unsubFromAuth = null

    componentDidMount() {
        const { addUser } = this.props

        this.unsubFromAuth = auth.onAuthStateChanged(user => {

            if (user) {
                const newUser = {
                    name: user.displayName,
                    email: user.email
                }

                addUser(newUser)
            }
        })
    }

    componentWillUnmount() {
        this.unsubFromAuth()
    }

    render() {

        return (
            <Container>
                <HeaderPrimary>Login With Google</HeaderPrimary>
                <HeaderSecondary>With Firebase</HeaderSecondary>
                <Br />
                <Button
                    bgColor="#4285F4"
                    bgHover="white"
                    colorHover="black"
                    font="'Cinzel', serif"
                    handleClick={signInWithGoogle}>
                    Google Login
                    </Button>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch(addUser(user))
})

export default connect(null, mapDispatchToProps)(Login)
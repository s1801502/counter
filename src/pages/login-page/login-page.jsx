import React from 'react'
import GoogleLogin from '../../components/google-login/login'
import LoginForm from '../../components/email-login/login'
import { Container, Add } from './login-page.styles'
import Header from '../../components/header/header'


const LoginPage = () => {


    return (
        <React.Fragment>
            <Header />
            <Add>
                "Remember the time you had to add one to another number and do all that in your very own head? That might still be
                your problem? Not mine, thought, since I let Calculator-app to do all the hard work for me.
                Advise from a friend: follow my lead and take the keys to an easy life"

                <div>Harry Potter</div>
            </Add>
            <Container>
                <GoogleLogin />
                <LoginForm />
            </Container>
        </React.Fragment>
    )
}

export default LoginPage
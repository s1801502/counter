import React from 'react'
import GoogleLogin from '../../components/google-login/login'
import LoginForm from '../../components/email-login/login'
import { Container } from './login-page.styles'
import Header from '../../components/header/header'


const LoginPage = () => (
    <React.Fragment>
        <Header />
        <Container>
            <GoogleLogin />
            <LoginForm />
        </Container>
    </React.Fragment>
)

export default LoginPage
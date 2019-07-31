import React from 'react'
import GoogleLogin from '../../components/google-login/login'
import LoginForm from '../../components/email-login/login'
import { Container } from './login-page.styles'


const LoginPage = () => (
    <Container>
        <GoogleLogin />
        <LoginForm />
    </Container>
)

export default LoginPage
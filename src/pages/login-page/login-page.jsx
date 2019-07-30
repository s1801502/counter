import React from 'react'
import GoogleLogin from './google-login/login'
import LoginForm from './email-login/login'
import { Container } from './login-page.styles'


const LoginPage = () => (
    <Container>
        <GoogleLogin />
        <LoginForm />
    </Container>
)

export default LoginPage
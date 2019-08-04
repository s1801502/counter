import React from 'react'
import GoogleLogin from '../../components/google-login/login'
import LoginForm from '../../components/email-login/login'
import { Container, Add, HeaderContainer as TitleContainer } from './login-page.styles'
import Header from '../../components/header/header'
import { HeaderPrimary as TitlePrimary, HeaderSecondary as TitleSecondary, Br } from './login-page.styles'


const LoginPage = () => {


    return (
        <React.Fragment>
            <Header />
            <TitleContainer>
            <TitlePrimary>Counter-App</TitlePrimary>
            <TitleSecondary>For heavy calculus</TitleSecondary>
            <Br />
            </TitleContainer>

            <Add>
                "Remember the time you had to add one to another number and do all that in your very own head?

                <div>Tracy Williams</div>
            </Add>
            <Container>
                <GoogleLogin />
                <LoginForm />
            </Container>
        </React.Fragment>
    )
}

export default LoginPage
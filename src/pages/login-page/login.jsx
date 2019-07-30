import React from 'react'
import { Container, HeaderPrimary, HeaderSecondary, Br } from './login.styles'
import { Button } from '@tkerola/button'

class Login extends React.Component {

    render() {

        return (
            <Container>
                <HeaderPrimary>Login With Google</HeaderPrimary>
                <HeaderSecondary>With Redux</HeaderSecondary>
                <Br />
                <Button bgColor="#3339FF" bgHover="#3352FF" colorHover="white" font="'Cinzel', serif">Google Login</Button>
            </Container>
        )
    }
}

export default Login
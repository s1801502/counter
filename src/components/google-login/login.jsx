import React from 'react'
import { Container, HeaderPrimary, HeaderSecondary, Br } from './login.styles'
import { Button } from '@tkerola/button'
import { signInWithGoogle } from '../../firebase/firebase'





class Login extends React.Component {

    

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



export default Login
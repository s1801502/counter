import React, { useState } from 'react'
import { Container, Header, FieldContainer, Form, Input} from './login.styles'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Container>
            <Header>Sign in with email and password</Header>
            <Form>
                <FieldContainer>
                <label>Email: </label>
                <Input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FieldContainer>
                <FieldContainer>
                <label>Password: </label>
                <Input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FieldContainer>
           </Form>
        </Container>
    )
}

export default LoginForm
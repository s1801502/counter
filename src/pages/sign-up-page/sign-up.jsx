import React, { useState } from 'react'
import { Container, Header, FieldContainer, Form, Input } from '../../components/email-login/login.styles'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <Container>
            <Header>Sign up with email and password</Header>
            <Form onSubmit={handleSubmit}>
                <FieldContainer>
                    <label>Email: </label>
                    <Input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FieldContainer>
                <FieldContainer>
                    <label>Password: </label>
                    <Input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FieldContainer>
                <FieldContainer>
                    <label>Confirm Password: </label>
                    <Input type="password" name="confirm" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
                </FieldContainer>
                <FieldContainer>
                    <Button font="'Cinzel', serif" style={{marginTop: '20px'}}>Submit</Button>
                </FieldContainer>
            </Form>
        </Container>
    )
}

export default SignUp
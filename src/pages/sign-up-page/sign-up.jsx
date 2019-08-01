import React, { useState } from 'react'
import { Container, Header as FormHeader, FieldContainer, Form, Input, Error } from '../../components/email-login/login.styles'
import { Button } from '@tkerola/button'
import { auth } from '../../firebase/firebase'
import Header from '../../components/header/header'

const styles = {
    margin: '90px auto'
}

const SignUp = ({ history, catchDisplayName }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [error, setError] = useState('')

    const removeError = () => setTimeout(() => setError(''), 2000)

    const handleSubmit = async e => {
        e.preventDefault()
        catchDisplayName(name)
        

        if (password !== confirm) {
            setError('Passwords won\'t match')
            removeError()
            return
        }

        try {
            await auth.createUserWithEmailAndPassword(email, password)
            history.push('/')

        } catch (error) {
            
            if (error.message.substring(0, 9) === 'The email')
                setError('Email already taken')
            else
                setError('Password length at least 6 characters')

            removeError()
        }

        
    }

    return (
        <React.Fragment>
            <Header />
            <Container style={styles}>
                <FormHeader>Sign up with email and password</FormHeader>
                <Form onSubmit={handleSubmit}>
                    <FieldContainer>
                        <label>Name: </label>
                        <Input type="text" required name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </FieldContainer>
                    <FieldContainer>
                        <label>Email: </label>
                        <Input type="email" required name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FieldContainer>
                    <FieldContainer>
                        <label>Password: </label>
                        <Input type="password" required name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FieldContainer>
                    <FieldContainer>
                        <label>Confirm Password: </label>
                        <Input type="password" required name="confirm" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
                    </FieldContainer>
                    <FieldContainer>
                        <Button font="'Cinzel', serif" style={{ marginTop: '20px' }}>Submit</Button>
                    </FieldContainer>
                    <Error>{ error && <p>{error}</p>}</Error>
                </Form>
            </Container>
        </React.Fragment>
    )
}


export default SignUp
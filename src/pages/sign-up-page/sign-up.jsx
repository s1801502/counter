import React, { useState } from 'react'
import { Container, Header as FormHeader, FieldContainer, Form, Input } from '../../components/email-login/login.styles'
import { Button } from '@tkerola/button'
import { auth } from '../../firebase/firebase'
import Header from '../../components/header/header'

const styles = {
    margin: '120px auto'
}

const SignUp = ({ history, catchDisplayName }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        catchDisplayName(name)
        

        if (password !== confirm) {
            alert('Passwords wont match')
            return
        }

        try {
            await auth.createUserWithEmailAndPassword(email, password)

            history.push('/')

        } catch (error) {
            console.log(error.message)
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
                        <Input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </FieldContainer>
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
                        <Button font="'Cinzel', serif" style={{ marginTop: '20px' }}>Submit</Button>
                    </FieldContainer>
                </Form>
            </Container>
        </React.Fragment>
    )
}


export default SignUp
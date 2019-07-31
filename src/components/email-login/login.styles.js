import styled from 'styled-components'


export const Container = styled.div`
    
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    height: 300px;
`

export const Header = styled.h2`
    margin-bottom: 10px;
    
`

export const Form = styled.form`
    width: 250px;


`

export const Input = styled.input`
    border: none;
    border-bottom: 1px solid #999;

    &:focus {
        outline: none;
    }
`

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    
`
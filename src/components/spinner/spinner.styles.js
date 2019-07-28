import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    from {
        transform: rotate(0deg);
    } 

    to {
        transform: rotate(360deg);
    }
`

export const Loader = styled.div`
    border: 10px solid grey;
    border-top: 10px solid blue;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 2s linear infinite;
`


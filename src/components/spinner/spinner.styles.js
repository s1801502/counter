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
    border: 10px solid red;
    border-top: 10px solid blue;
    border-radius: 50%;
    width: 75px;
    height: 75px;
    animation: ${spin} 1s linear infinite;
`


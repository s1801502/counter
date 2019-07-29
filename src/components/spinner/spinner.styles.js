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
    border: 5px solid grey;
    border-top: 5px solid blue;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: ${spin} 1s linear infinite;
`


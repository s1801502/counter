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
    border: 10px solid #fff;
    border-top: 10px solid #111;
    border-radius: 50%;
    width: 65px;
    height: 65px;
    animation: ${spin} 1s linear infinite;
`


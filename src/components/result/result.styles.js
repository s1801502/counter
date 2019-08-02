import styled, { keyframes } from 'styled-components'




export const HeaderPrimary = styled.div`
    text-align: center;
    font-size: 2.5em;
    color: black;
    margin: 0;
    padding: 0;
    position: relative;
    
`

export const HeaderSecondary = styled.div`
    text-align: center;
    font-size: 1em;
    color: #777;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 90px;
`

const anim = keyframes`
    0%, 100% {
        width: 0px;
    }

    50% {
        width: 150px;
    }
`

export const Br = styled.div`
    border-bottom: 1px solid #777;
    animation: ${anim} 2s infinite;
    margin-bottom: 20px;
    position: absolute;
    top: 110px;
`
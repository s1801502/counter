import styled, {keyframes} from 'styled-components'

export const Container = styled.div`
    
    width: 400px;
    height: 300px;
    
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    position: relative;
    
    
`


export const HeaderPrimary = styled.div`
    text-align: center;
    font-size: 2.0em;
    color: black;
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
    
`

export const HeaderSecondary = styled.div`
    text-align: center;
    font-size: 1em;
    color: #777;
    margin: 0;
    padding: 0;
    position: absolute;
    top: -20px;
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
    top: 0px;
    
`
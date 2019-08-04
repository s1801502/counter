import styled, { keyframes} from 'styled-components'

export const Container = styled.div`
    height: 70%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
   
`
export const Add = styled.div`
    font-size: 1em;
    font-style: italic;
    color: #aaa;
    border-left: 5px solid #ddd;
    margin: 30px 180px 0px 180px;
    padding: 0px 15px;

    & div {
        
        font-style: normal;
        text-align: right;
        font-size: 0.8em;
        padding-top: 10px;
    }
`

export const HeaderContainer = styled.div`
    position: relative;
    width: 40%;
    margin: 0 auto;
    margin-bottom: 50px;
`

export const HeaderPrimary = styled.div`
    text-align: center;
    font-size: 2.5em;
    color: black;
    margin: 0;
    padding: 0;
    
    
`

export const HeaderSecondary = styled.div`
    text-align: center;
    font-size: 1em;
    color: #777;
    
    padding: 0;
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    
    
`

const anim = keyframes`
    0%, 100% {
        transform: scaleX(0);
    }

    50% {
        transform: scaleX(1);
    }
`

export const Br = styled.div`
    border-bottom: 1px solid #777;
    width: 40%;
    animation: ${anim} 2s infinite;
    
    position: absolute;
    top: 5px;
    left: 30%;
    
`


import styled, { keyframes } from 'styled-components'


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
    font-family: 'Cinzel', serif;
    border: none;
    border-bottom: 1px solid #999;
    background-color: white;
    
    

    &:focus {
        outline: none;
        background-color: none;
    }
`

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    
`

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`

export const Error = styled.div`
    color: red;
    font-size: 1em;
    margin-top: 60px;
    text-align: center;
    animation: ${shake} 0.82s cubic-bezier(.36,.07,.19,.97) infinite;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px; 
    z-index: 50;
    
`

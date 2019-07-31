import styled, {css} from 'styled-components'

const sharedCss = css`
    height: 40px;
    background-color: #444;
    margin-bottom: 50px;
    color: white;
    font-size: 0.8em;
    align-items: center;
    padding-left: 20px;
`

export const Container = styled.div`
    
    ${sharedCss}
    display: flex;
    justify-content: space-between;
    
` 
export const SignUpContainer = styled.div`
    display: flex;    
    
    justify-content: flex-end;

`
export const Span = styled.span`
    margin-right: 20px;
    color: #aaa;
`

export const Logout = styled.span`
    
    margin-right: 20px;
    cursor: pointer;

`
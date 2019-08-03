import styled from 'styled-components'

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
    margin: 0 150px;
    padding: 0px 15px;

    & div {
        width: 98%;
        font-style: normal;
        text-align: right;
    }
`


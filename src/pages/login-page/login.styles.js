import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    width: 400px;
    height: 200px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`


export const HeaderPrimary = styled.div`
    text-align: center;
    font-size: 1.0em;
    color: black;
    margin: 0;
    padding: 0;
    position: relative;
`

export const HeaderSecondary = styled.div`
    text-align: center;
    font-size: 0.5em;
    color: #777;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 50px;
`

export const Br = styled.div`
    border-bottom: 1px solid #777;
    width: 120px;
    margin-bottom: 20px;
    position: absolute;
    top: 70px;
`
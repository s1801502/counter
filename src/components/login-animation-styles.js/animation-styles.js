import styled from 'styled-components'

export const ClickEffect = styled.div`
  opacity: 0;
  z-index: 0;
  width: 1px;
  height: 1px;
  background-color: black;
  transition: transform 0.6s ease-in-out;
  transform: scale(.1);
  position absolute;
  top: 400px;
  left: 650px;
  

  &.show {
    opacity: 1;
    transform: scale(2000);
    z-index: 10;
  }
`

export const Message = styled.div`
  position: fixed;
  opacity: 0;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  transform: scale(0.01);
  color: white;

  &.show {
    opacity: 1;
    transform: scale(1);
    z-index: 25;
    transition: all 0.4s ease-in-out;
    transition-delay: 0.3s;
  }

  
`
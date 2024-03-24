import styled from 'styled-components'

export const BtnCont = styled.li``

export const Button = styled.button`
  border: 1px solid #db1c48;
  background-color: ${props => (props.isActive ? '#db1c48' : '#ffffff')};
  color: ${props => (props.isActive ? '#ffffff' : '#db1c48')};
  width: 100px;
  height: 30px;
  border-radius: 30px;
  outline: none;
  cursor: pointer;
`

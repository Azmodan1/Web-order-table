import styled from 'styled-components'

const Button = styled.button`
  color: black;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  border-style: none;
  border-radius: 20px;
  height: 60px;
  width: ${props => props.width || '200px'};
  background-color: lightgrey;
  &:hover {
    background-color: white;
  }
`
export default Button

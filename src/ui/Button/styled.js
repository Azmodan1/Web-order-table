import styled from 'styled-components'

const Button = styled.button`
  color: black;
  outline: none;
  cursor: pointer;
  border-style: none;
  border-radius: 20px;
  height: 60px;
  width: ${props => props.width || '200px'};
  background-color: rgb(209, 197, 197);
  &:hover {
    background-color: white;
  }
`
export default Button

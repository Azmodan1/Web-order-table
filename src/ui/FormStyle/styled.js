import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 400px;
  height: 500px;
  margin: 0 0 15px 0;
`

const InputControl = styled.input`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '32px'};
  padding: 8px;
  border: solid black;
  background-color: lightgrey;
  border-radius: 10px;
  &:focus {
    outline: none;
    border-color: white;
  }
  &::placeholder {
    color: grey;
  }
`

export { Wrapper, InputControl }

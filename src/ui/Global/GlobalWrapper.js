import styled from 'styled-components'
import Firenze from '../assets/Firenze.jpg'

const GlobalWrapper = styled.div`
  background-image: url(${Firenze});
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export default GlobalWrapper

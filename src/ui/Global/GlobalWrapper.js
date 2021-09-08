import styled from 'styled-components'
import Firenze from '../assets/Firenze.jpg'

const GlobalWrapper = styled.div`
  min-height: 100vh;
  background-image: url(${Firenze});
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export default GlobalWrapper

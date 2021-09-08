import styled from 'styled-components'

const Container = styled.div`
  width: 1400px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dca;
  border: 3px solid black;
  border-radius: 14px;
  flex-direction: column;
`
const ContainerBody = styled.div`
  height: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const ContainerComment = styled(Container)`
  padding: 10px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  border-left: 1px solid black;
`

const DataContainer = styled.div`
  padding: 20px;
  width: 700px;
  color: white;
  font-weight: bold;
`
const DataName = styled.span`
  color: black;
  font-size: 30px;
  font-weight: normal;
`
const Message = styled.span`
  font-weight: bold;
  color: black;
  font-size: 13;
`

export { DataContainer, DataName, Container, ContainerComment, Message, ContainerBody }

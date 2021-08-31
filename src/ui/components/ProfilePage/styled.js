import styled from 'styled-components'

const Container = styled.div`
  width: 1400px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(36, 34, 34);
  border-radius: 10px;
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
  border-left: 10px solid grey;
`

const DataContainer = styled.div`
  padding: 20px;
  width: 700px;
  color: grey;
`
const DataName = styled.span`
  color: white;
  font-size: 30px;
`
const Message = styled.span`
  color: white;
  font-size: 13;
`

export { DataContainer, DataName, Container, ContainerComment, Message, ContainerBody }

import styled from 'styled-components'

const Container = styled.div`
  width: 1400px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(53, 7, 7);
  border: 3px solid rgb(209, 197, 197);
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
  border-left: 10px solid rgb(209, 197, 197);
`

const DataContainer = styled.div`
  padding: 20px;
  width: 700px;
  color: orange;
  font-weight: bold;
`
const DataName = styled.span`
  color: rgb(209, 197, 197);
  font-size: 30px;
  font-weight: normal;
`
const Message = styled.span`
  color: rgb(209, 197, 197);
  font-size: 13;
`

export { DataContainer, DataName, Container, ContainerComment, Message, ContainerBody }

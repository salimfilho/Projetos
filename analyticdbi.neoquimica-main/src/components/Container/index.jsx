import { ContainerDiv } from './styled'

const Component = props => {
  return (
    <ContainerDiv>
      {props.children}
    </ContainerDiv>
  )
}

export default Component
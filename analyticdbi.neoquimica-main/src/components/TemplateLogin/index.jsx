import { Login, Image, Form, Logo, LoginBox } from './styled'

const Base = ChildrenComponent => {

  const ComponentBase = props => {
    return (
      <Login>
        <Form>
          <LoginBox>
            <Logo>
              <img src="/logo-neo-vista.png" alt="neoquimica" />
            </Logo>
            <ChildrenComponent {...props} />
          </LoginBox>
        </Form>
        <Image>
          <div></div>
        </Image>
      </Login>
    )
  }

  return ComponentBase
}

export default Base
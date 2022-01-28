import TitleBar from 'components/TitleBar'
import Content from 'components/Content'
import Card from 'components/Card'
import CardTitle from 'components/CardTitle'
import Input from 'components/Form/LabelInput'
import Select from 'components/Form/LabelSelect'
import BtnYellow from 'components/Button/BtnYellow'
import Messages from 'components/Messages'
import Spinner from 'components/Spinner'
import CardBody from 'components/CardBody'
import BtnBox from 'components/Button/BtnBox'

const Component = props => {
  const breadcrumb = [{ path: '/usuarios', label: 'Index' }]
  return (
    <>
      <TitleBar label="Usuários" currentPage="" />
      <Content>
        <Card>
          <CardTitle title="Cadastrar"></CardTitle>
          <Content>
            <CardBody>
              <form onSubmit={props.formik.handleSubmit}>
                <Messages formMessages={props.messages.messages} alert={props.messages.alert} />
                <Input name="name" label="Nome" formik={props.formik} />
                <Input name="email" label="Email" formik={props.formik} />
                <Select
                  name="roles"
                  label="Permissão"
                  formik={props.formik}
                >
                  <option value="">Selecione...</option>
                  <option value="admin">Administrador</option>
                  <option value="user">Usuário</option>
                </Select>
                <BtnBox>
                  <BtnYellow type="submit" disabled={props.formik.isSubmitting}>
                    {props.formik.isSubmitting ? <Spinner /> : "Enviar"}
                  </BtnYellow>
                </BtnBox>
              </form>
            </CardBody>
          </Content>
        </Card>
      </Content>
    </>
  )
}

export default Component
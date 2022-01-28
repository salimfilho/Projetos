import TitleBar from 'components/TitleBar'
import Content from 'components/Content'
import Card from 'components/Card'
import CardTitle from 'components/CardTitle'
import Input from 'components/Form/LabelInput'
import BtnYellow from 'components/Button/BtnYellow'
import Messages from 'components/Messages'
import Spinner from 'components/Spinner'
import Modal from 'components/Modal'
import BtnRed from 'components/Button/BtnRed'
import BtnBox from 'components/Button/BtnBox'
import BtnWhite from 'components/Button/BtnWhite'
import Table from 'components/Table'
import CardBody from 'components/CardBody'

const Component = props => {
  const breadcrumb = [
    { path: '/usuarios', label: 'Index' },
    { path: `/usuarios/${props.params.id}/relatorios`, label: 'Relatórios' }
  ]
  return (
    <>
      <TitleBar label="Usuários" currentPage="" />
      <Content>
        <Card>
          <CardTitle title="Usuário" />
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Permissão</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.user.name}</td>
                <td>{props.user.email}</td>
                <td>{props.user.roles}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        <Card>
          <CardTitle title="Editar">
            <BtnRed onClick={() => props.setVisibleModal(true)}>Excluir</BtnRed>
          </CardTitle>
          <Content>
            <CardBody>
              <form onSubmit={props.formik.handleSubmit}>
                <Messages formMessages={props.messages.messages} alert={props.messages.alert} />
                <Input name="roles" label="Roles" formik={props.formik} />
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
      <Modal visibleModal={props.visibleModal} setVisibleModal={props.setVisibleModal}>
        <Card>
          <Content>
            <Content>
              <CardBody>
                <p>Deseja excluir esse item?</p>
                <BtnBox>
                  <BtnRed onClick={props.handleDelete}>
                    Excluir
                  </BtnRed>
                  <BtnWhite onClick={() => props.setVisibleModal(false)}>Cancelar</BtnWhite>
                </BtnBox>
              </CardBody>
            </Content>
          </Content>
        </Card>
      </Modal>
    </>
  )
}

export default Component
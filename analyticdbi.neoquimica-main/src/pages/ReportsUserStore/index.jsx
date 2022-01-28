import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Validation from './validation'
import { handleStoreReport } from 'services/api/reports'
import { handleCards } from 'services/api/reportCards'
import { getUser } from 'services/auth'
import TitleBar from 'components/TitleBar'
import Content from 'components/Content'
import Card from 'components/Card'
import CardTitle from 'components/CardTitle'
import Input from 'components/Form/LabelInput'
import Select from 'components/Form/LabelSelect'
import BtnYellow from 'components/Button/BtnYellow'
import Messages from 'components/Messages'
import Spinner from 'components/Spinner'
import Table from 'components/Table'
import CardBody from 'components/CardBody'
import BtnBox from 'components/Button/BtnBox'

const Page = () => {
  const params = useParams()
  const [user, setUser] = useState({})
  const [cards, setCards] = useState([])

  useEffect(() => {
    (async () => {
      await new Promise(resolve => resolve(getUser()))
        .then(async res => {
          setUser(res.data)
          return res
        })
        .then(async res => await handleCards(res.data.firm_id))
        .then(async res => setCards(res))
    })()
  }, [])

  const [messages, setMessages] = useState({ messages: [], alert: '' })
  const history = useHistory()
  const formik = useFormik({
    initialValues: { user_id: params.id, roles: '', card: {} },
    validationSchema: Yup.object(Validation(Yup)),
    onSubmit: () => handleStoreReport(history, formik.values, params.id, setMessages)
  })

  const breadcrumb = [
    { path: '/usuarios', label: 'Index' },
    { path: `/usuarios/${params.id}/relatorios`, label: 'Relatórios' }
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
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.roles}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        <Card>
          <CardTitle title="Cadastrar"></CardTitle>
          <Content>
            <CardBody>
              <form onSubmit={formik.handleSubmit}>
                <Messages formMessages={messages.messages} alert={messages.alert} />
                <Select name="card" label="Relatórios" formik={formik}>
                  <option value="">Selecione...</option>
                  {cards.map(item => <option key={item.id} value={JSON.stringify(item)}>{item.name}</option>)}
                </Select>
                <Input name="roles" label="Roles" formik={formik} />
                <BtnBox>
                  <BtnYellow type="submit" disabled={formik.isSubmitting}>
                    {formik.isSubmitting ? <Spinner /> : "Enviar"}
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

export default Page
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { getUser } from 'services/auth'
import TitleBar from 'components/TitleBar'
import Content from 'components/Content'
import Card from 'components/Card'
import CardTitle from 'components/CardTitle'
import Input from 'components/Form/LabelInput'
import BtnYellow from 'components/Button/BtnYellow'
import Messages from 'components/Messages'
import Spinner from 'components/Spinner'
import CardBody from 'components/CardBody'
import BtnBox from 'components/Button/BtnBox'
import { handleReportCardsStore } from 'services/api/reportCards'
import Validation from './validation'
import { handlePowerBiGroups, handlePowerBiReports } from 'services/api/powerbi'
import Select from 'components/Form/LabelSelect'

const Page = () => {

  const [user, setUser] = useState({})
  const [groups, setGroups] = useState([])
  const [reports, setReports] = useState([])

  useEffect(() => {
    setUser(getUser().data)
  }, [])

  useEffect(() => {
    (async () => {
      setGroups(await handlePowerBiGroups())
    })()
  }, [])

  const [messages, setMessages] = useState({ messages: [], alert: '' })
  const history = useHistory()
  const formik = useFormik({
    initialValues: { name: '', group_id: '', report_id: '', dataset_id: '' },
    validationSchema: Yup.object(Validation(Yup)),
    onSubmit: () => handleReportCardsStore(history, formik.values, user.firm_id, setMessages)
  })

  useEffect(() => {
    (async () => {
      if (formik.values.group_id) {
        setReports(await handlePowerBiReports(formik.values.group_id))
      }
    })()
  }, [formik.values.group_id])

  useEffect(() => {
    if (formik.values.report_id) {
      formik.setFieldValue('name', (reports.find(element => element.id === formik.values.report_id)).name)
      formik.setFieldValue('dataset_id', (reports.find(element => element.id === formik.values.report_id)).datasetId)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.report_id])

  const breadcrumb = [{ path: '/cards', label: 'Index' }]

  return (
    <>
      <TitleBar label="Cards" currentPage="" />
      <Content>
        <Card>
          <CardTitle title="Cadastrar"></CardTitle>
          <Content>
            <CardBody>
              <form onSubmit={formik.handleSubmit}>
                <Messages formMessages={messages.messages} alert={messages.alert} />
                <Select name="group_id" label="Grupos" formik={formik}>
                  <option value="">Selecione...</option>
                  {groups.map(group => <option key={group.id} value={group.id}>{group.name}</option>)}
                </Select>
                <Select name="report_id" label="Relatórios" formik={formik}>
                  <option value="">Selecione...</option>
                  {reports.map(report => <option key={report.id} value={report.id}>{report.name}</option>)}
                </Select>
                <Input name="name" label="Nome" formik={formik} />
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

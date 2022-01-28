import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import TitleBar from 'components/TitleBar'
import Content from 'components/Content'
import Card from 'components/Card'
import CardTitle from 'components/CardTitle'
import Input from 'components/Form/LabelInput'
import BtnYellow from 'components/Button/BtnYellow'
import BtnRed from 'components/Button/BtnRed'
import BtnBox from 'components/Button/BtnBox'
import BtnWhite from 'components/Button/BtnWhite'
import Messages from 'components/Messages'
import Spinner from 'components/Spinner'
import Modal from 'components/Modal'
import CardBody from 'components/CardBody'
import Upload from 'components/Form/Upload'
import Select from 'components/Form/LabelSelect'
import Validation from './validation'
import { handleCardShow, handleCardReport, handleCardDelete, handleCardUpdateFile } from 'services/api/reportCards'
import { handlePowerBiGroups, handlePowerBiReports } from 'services/api/powerbi'

const Page = () => {

  const history = useHistory()
  const params = useParams()
  const [messages, setMessages] = useState({ messages: [], alert: '' })
  const [data, setData] = useState({})
  const [visibleModal, setVisibleModal] = useState(false)

  const [messagesFile, setMessagesFile] = useState('')
  const [done, setDone] = useState(true)
  const [errors, setErrors] = useState([])

  const [groups, setGroups] = useState([])
  const [reports, setReports] = useState([])

  useEffect(() => {
    (async () => {
      setData(await handleCardShow(params.id))
      setDone(false)
    })()
  }, [params.id])

  useEffect(() => {
    (async () => {
      await new Promise(async resolve => resolve(await handlePowerBiGroups()))
        .then(res => setGroups(res))
    })()
  }, [])

  const formik = useFormik({
    initialValues: {
      name: data.name,
      email: data.email,
      roles: data.roles,
      group_id: data.group_id,
      report_id: data.report_id,
      dataset_id: data.dataset_id,
    },
    validationSchema: Yup.object(Validation(Yup)),
    onSubmit: () => handleCardReport(history, formik.values, params.id, setMessages),
    enableReinitialize: true
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
      reports.length > 0 && formik.setFieldValue('name', (reports.find(element => element.id === formik.values.report_id)).name)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.report_id])

  const files = async files => {
    setMessagesFile('')
    setErrors([])
    setDone(true)
    await handleCardUpdateFile(files[0], params.id)
    setData(await handleCardShow(params.id))
    setDone(false)
  }

  const handleDelete = async () => await handleCardDelete(params.id, history)

  const breadcrumb = [{ path: '/cards', label: 'Index' }]

  return (
    <>
      <TitleBar label="Cards" currentPage="" />
      <Content>
        <Card>
          <CardTitle title="Editar">
            <BtnRed onClick={() => setVisibleModal(true)}>Excluir</BtnRed>
          </CardTitle>
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

        <Card>
          <CardTitle title="Imagem"></CardTitle>
          <Content>
            <CardBody>
              <Upload
                onUpload={files}
                fileUrl={data.file_url}
                done={done}
                errors={errors}
                setErrors={setErrors}
              />
              <p>{messagesFile}</p>
            </CardBody>
          </Content>
        </Card>
      </Content>
      <Modal visibleModal={visibleModal} setVisibleModal={setVisibleModal}>
        <Card>
          <Content>
            <Content>
              <CardBody>
                <p>Deseja excluir esse item?</p>
                <BtnBox>
                  <BtnRed onClick={handleDelete}>Excluir</BtnRed>
                  <BtnWhite onClick={() => setVisibleModal(false)}>Cancelar</BtnWhite>
                </BtnBox>
              </CardBody>
            </Content>
          </Content>
        </Card>
      </Modal>
    </>
  )
}

export default Page

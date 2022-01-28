import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Validation from './validation'
import { handleUpdateReport, handleReportById, handleReportDelete } from 'services/api/reports'
import { handleUserShow } from 'services/api/users'
import Component from './Component'

const Page = () => {
    const params = useParams()
    const [data, setData] = useState({})
    const [user, setUser] = useState({})
    const [visibleModal, setVisibleModal] = useState(false)

    useEffect(() => {
        (async () => {
            setUser(await handleUserShow(params.id))
        })()
    }, [params.id])

    useEffect(() => {
        (async () => {
            setData(await handleReportById(params.report_id))
        })()
    }, [params.report_id])

    const [messages, setMessages] = useState({ messages: [], alert: '' })
    const history = useHistory()
    const formik = useFormik({
        initialValues: { roles: data.roles },
        validationSchema: Yup.object(Validation(Yup)),
        onSubmit: () => handleUpdateReport(history, formik.values, params.report_id, params.id, setMessages),
        enableReinitialize: true
    })

    const handleDelete = async () => await handleReportDelete(params.report_id, params.id, history)

    return <Component
        formik={formik}
        messages={messages}
        params={params}
        handleDelete={handleDelete}
        setVisibleModal={setVisibleModal}
        visibleModal={visibleModal}
        user={user}
    />
}

export default Page
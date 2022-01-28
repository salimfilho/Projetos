import { useEffect, useState, useCallback } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Validation from './validation'
import { handleUserShow, handleUpdateUser, handleUserDelete, handleUserUpdateFile } from 'services/api/users'
import Component from './Component'
import { getUser } from 'services/auth'

const Page = () => {

    const history = useHistory()
    const params = useParams()
    const [messages, setMessages] = useState({ messages: [], alert: '' })
    const [data, setData] = useState({})
    const [visibleModal, setVisibleModal] = useState(false)
    const [messagesFile, setMessagesFile] = useState('')
    const [errors, setErrors] = useState([])
    const [done, setDone] = useState(true)

    const fetchData = useCallback(async () => await handleUserShow(params.id))

    useEffect(() => {
        (async () => {
            setDone(true)
            setData(await fetchData())
            setDone(false)
        })()
    }, [])

    const formik = useFormik({
        initialValues: { name: data.name, email: data.email, roles: data.roles },
        validationSchema: Yup.object(Validation(Yup)),
        onSubmit: () => handleUpdateUser(history, formik.values, params.id, setMessages),
        enableReinitialize: true
    })

    const handleDelete = async () => await handleUserDelete(params.id, history)

    const files = async files => {
        setMessagesFile('')
        setErrors([])
        setDone(true)
        await handleUserUpdateFile(files[0], data.id)
        setData(await handleUserShow(getUser().data.id))
        setDone(false)
    }

    return <Component
        setVisibleModal={setVisibleModal}
        visibleModal={visibleModal}
        formik={formik}
        messages={messages}
        handleDelete={handleDelete}
        files={files}
        messagesFile={messagesFile}
        data={data}
        errors={errors}
        done={done}
        setErrors={setErrors}
    />
}

export default Page
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Validation from './validation'
import ValidationPassword from './validationPassword'
import {
    handleUserShow,
    handleUserUpdateFile,
    handleUpdateProfile,
    handleUserUpdatePassword
} from 'services/api/users'
import { getUser } from 'services/auth'

import Component from './Component'

const Page = () => {

    const [messages, setMessages] = useState({ messages: [], alert: '' })
    const [messagesPassword, setMessagesPassword] = useState({ messages: [], alert: '' })
    const [messagesFile, setMessagesFile] = useState('')

    const [data, setData] = useState({})
    const history = useHistory()

    const [done, setDone] = useState(true)
    const [errors, setErrors] = useState([])

    useEffect(() => {
        (async () => {
            setDone(true)
            setData(await handleUserShow(getUser().data.id))
            setDone(false)
        })()
    }, [])

    const formik = useFormik({
        initialValues: { name: data.name, email: data.email },
        validationSchema: Yup.object(Validation(Yup)),
        onSubmit: () => handleUpdateProfile(history, data.id, formik.values, setMessages),
        enableReinitialize: true
    })

    const formikPassword = useFormik({
        initialValues: { current_password: '', password: '', password_confirmation: '' },
        validationSchema: Yup.object(ValidationPassword(Yup)),
        onSubmit: () => handleUserUpdatePassword(history, formikPassword.values, setMessagesPassword)
    })

    const files = async files => {
        setMessagesFile('')
        setErrors([])
        setDone(true)
        await handleUserUpdateFile(files[0], data.id)
        setData(await handleUserShow(getUser().data.id))
        setDone(false)
    }

    return <Component
        formik={formik}
        messages={messages}
        files={files}
        data={data}
        done={done}
        errors={errors}
        setErrors={setErrors}
        messagesFile={messagesFile}
        formikPassword={formikPassword}
        messagesPassword={messagesPassword}
    />
}

export default Page
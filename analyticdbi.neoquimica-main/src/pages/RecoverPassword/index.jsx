import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Validation from './validation'
import { handleUserRecoverPassword } from 'services/api/users'
import Component from './Component'

const Page = () => {

    const history = useHistory()
    const params = useParams()

    const [messages, setMessages] = useState({ messages: [], alert: '' })
    const formik = useFormik({
        initialValues: { password: '', password_confirmation: '' },
        validationSchema: Yup.object(Validation(Yup)),
        onSubmit: () => handleUserRecoverPassword(history, params.token, formik.values, setMessages)
    })

    return <Component formik={formik} messages={messages} />
}

export default Page
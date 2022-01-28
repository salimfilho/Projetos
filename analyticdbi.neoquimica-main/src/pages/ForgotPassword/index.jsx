import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Validation from './validation'
import { handleUserForgotPassword } from 'services/api/users'
import Component from './Component'

const Page = () => {

    const [messages, setMessages] = useState({ messages: [], alert: '' })
    const formik = useFormik({
        initialValues: { email: '' },
        validationSchema: Yup.object(Validation(Yup)),
        onSubmit: () => handleUserForgotPassword(formik.values, setMessages)
    })

    return <Component formik={formik} messages={messages} />
}

export default Page
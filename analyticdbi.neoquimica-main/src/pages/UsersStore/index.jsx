import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Validation from './validation'
import { handleStoreUser } from 'services/api/users'
import { getUser } from 'services/auth'
import Component from './Component'

const Page = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
        setUser(getUser().data)
    }, [])

    const [messages, setMessages] = useState({ messages: [], alert: '' })
    const history = useHistory()
    const formik = useFormik({
        initialValues: { name: '', email: '', roles: '' },
        validationSchema: Yup.object(Validation(Yup)),
        onSubmit: () => handleStoreUser(history, formik.values, user.firm_id, setMessages)
    })

    return <Component formik={formik} messages={messages} />
}

export default Page
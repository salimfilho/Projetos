import { useState, createRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ReCAPTCHA from 'react-google-recaptcha'
import Validation from './validation'
import { handleUserLogin } from 'services/api/users'
import { Link } from 'react-router-dom'
import Input from 'components/Form/LabelInput'
import BtnBlue from 'components/Button/BtnBlue'
import Messages from 'components/Messages'
import Spinner from 'components/Spinner'
import { Login, SubTitle, InputBox, BtnBox, ForgotPassword, Form, CaptchaBox } from './styled'
import config from 'config'

const Page = () => {

  const recaptchaRef = createRef(null)
  const [isValid, setIsValid] = useState('')

  const onChange = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    setIsValid(recaptchaValue)
    setMessages({ messages: '', alert: '' })
  }

  const [messages, setMessages] = useState({ messages: [], alert: '' })
  const history = useHistory()
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object(Validation(Yup)),
    onSubmit: () => {
      if (isValid) {
        handleUserLogin(history, formik.values, setMessages)
      } else {
        formik.setSubmitting(false)
        setMessages({ messages: 'Captcha Inválido', alert: 'alert-orange' })
      }
    }
  })

  return (
    <Login>
      <h1>Login</h1>
      <SubTitle>Entre com o seu email e senha.</SubTitle>
      <Form onSubmit={formik.handleSubmit}>
        <InputBox>
          <Input
            type="email"
            name="email"
            label="Email"
            formik={formik}
          />
        </InputBox>
        <InputBox>
          <Input
            type="password"
            name="password"
            label="Senha"
            formik={formik}
          />
        </InputBox>
        <CaptchaBox>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={config.captchaKey}
            onChange={onChange}
          />
        </CaptchaBox>
        <ForgotPassword>
          <Link to="/esqueci-senha">Esqueceu a senha?</Link>
        </ForgotPassword>
        <BtnBox>
          <Messages formMessages={messages.messages} alert={messages.alert} />
          <BtnBlue type="submit" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? <Spinner /> : "Entrar"}
          </BtnBlue>
        </BtnBox>
      </Form>
    </Login>
  )
}

export default Page
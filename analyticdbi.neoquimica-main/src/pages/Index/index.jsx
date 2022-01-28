import { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { userAuthenticated } from '../../services/auth'

const Page = () => {

  const [redirect, setRedirect] = useState({})

  useEffect(() => {
    new Promise(resolve => resolve(userAuthenticated()))
      .then(res => {
        if (res.data.roles === 'admin') {
          setRedirect('/grupos')
        }
        if (res.data.roles === 'user') {
          setRedirect('/relatorios')
        }
      })
  }, [])

  return <Redirect to={redirect} />
}

export default Page
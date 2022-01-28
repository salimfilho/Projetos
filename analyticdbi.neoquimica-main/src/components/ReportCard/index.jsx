import './style.jsx'
import React from 'react'
import { CardLink } from './style'

const Component = ({ name, fileUrl, linkTo }) => {
  return (
    <CardLink to={linkTo}>
      <img src={fileUrl ? fileUrl : '/user.svg'} alt="analyticdi" />
      <p>{name}</p>
    </CardLink>
  )
}

export default Component
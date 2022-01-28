const Validation = yup => ({
  user_id: yup.number().required('Campo obrigatório'),
  card: yup.string().required('Campo obrigatório'),
  roles: yup.string()
})

export default Validation
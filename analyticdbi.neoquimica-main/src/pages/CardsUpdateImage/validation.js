const Validation = yup => ({
    name: yup.string()
        .required('Campo obrigatório')
})

export default Validation
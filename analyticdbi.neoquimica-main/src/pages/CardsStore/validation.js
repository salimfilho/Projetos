const Validation = yup => ({
    name: yup.string().required('Campo obrigatório'),
    group_id: yup.string().required('Campo obrigatório'),
    report_id: yup.string().required('Campo obrigatório')
})

export default Validation
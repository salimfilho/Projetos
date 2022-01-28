import api from './api'

export const handlePowerBiGroups = async () => (await api.get(`/powerbi/groups`)).data

export const handlePowerBiReports = async id => (await api.get(`/powerbi/groups/${id}/reports`)).data

export const handlePowerBiReportAad = async values => (await api.post(`/powerbi/reports/aad`, values)).data

export const handlePowerBiReportEmbed = async values => (await api.post(`/powerbi/reports/embed`, values)).data

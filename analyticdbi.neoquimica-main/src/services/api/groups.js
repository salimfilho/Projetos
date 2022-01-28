import api from './api'

export const handleGroups = async () => (await api.get(`/contas/grupos`)).data

export const handleReports = async id => (await api.get(`/contas/grupos/${id}/relatorios`)).data

import api from './api'
import { setErrors } from 'utils'

export const handleReportsByUser = async userId =>
  (await api.post(`/reports/list-by-user`, { user_id: userId })).data

export const handleReportsByUserWithCard = async userId =>
  (await api.post(`/reports/list-by-user-with-card`, { user_id: userId })).data

export const handleReportById = async id => (await api.get(`/reports/${id}`)).data

export const handleReport = async (reportId, userId) =>
  (await api.post(`/reports/show-by-report`, { report_id: reportId, user_id: userId })).data

export const handleStoreReport = async (history, data, userId, setMessages) => {
  const card = JSON.parse(data.card)
  const values = {
    user_id: data.user_id,
    name: card.name,
    report_id: card.report_id,
    group_id: card.group_id,
    dataset_id: card.dataset_id,
    roles: data.roles
  }
  try {
    await api.post(`/reports/store`, values)
    return history.push(`/usuarios/${userId}/relatorios`)
  } catch (error) {
    setMessages({ messages: setErrors(error), alert: 'alert-orange' })
  }
}

export const handleUpdateReport = async (history, data, reportId, userId, setMessages) => {
  try {
    await api.put(`/reports/${reportId}/update`, data)
    return history.push(`/usuarios/${userId}/relatorios`)
  } catch (error) {
    setMessages({ messages: setErrors(error), alert: 'alert-orange' })
  }
}

export const handleReportDelete = async (id, userId, history) => {
  await api.delete(`/reports/${id}`)
  return history.push(`/usuarios/${userId}/relatorios`)
}
import api from './api'
import { setErrors } from 'utils'

export const handleCards = async firmId => (await api.post(`/report-cards/list-by-firm`, { firm_id: firmId })).data

export const handleCardShow = async id => (await api.get(`/report-cards/${id}`)).data

export const handleReportCardsByFirm = async firmId =>
  (await api.post(`/report-cards/list-by-firm`, { firm_id: firmId })).data

export const handleReportCardsStore = async (history, data, firmId, setMessages) => {
  const values = {
    "firm_id": firmId,
    "group_id": data.group_id,
    "report_id": data.report_id,
    "dataset_id": data.dataset_id,
    "name": data.name
  }
  try {
    const response = await api.post(`/report-cards/store`, values)
    return history.push(`/cards/${response.data.id}/upload`)
  } catch (error) {
    setMessages({ messages: setErrors(error), alert: 'alert-orange' })
  }
}

export const handleCardReport = async (history, data, cardId, setMessages) => {
  const values = {
    "group_id": data.group_id,
    "report_id": data.report_id,
    "dataset_id": data.dataset_id,
    "name": data.name
  }
  try {
    await api.put(`/report-cards/${cardId}/update`, values)
    return history.push(`/cards`)
  } catch (error) {
    setMessages({ messages: setErrors(error), alert: 'alert-orange' })
  }
}

export const handleCardDelete = async (id, history) => {
  await api.delete(`/report-cards/${id}`)
  return history.push(`/cards`)
}

export const handleCardUpdateFile = async (data, id) => {
  const values = new FormData()
  values.append('file', data)
  try {
    await api.put(`/report-cards/${id}/upload`, values)
    return
  } catch (error) {
    return error
  }
}
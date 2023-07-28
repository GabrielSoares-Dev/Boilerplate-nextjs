import axios from 'axios'
import { useAuthStore } from '@store'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
})


api.interceptors.request.use((config) => {
  const { data } = useAuthStore.getState()
  const token = data.accessToken.token
  const username =
    process.env.NEXT_PUBLIC_AUTHENTICATOR_USERNAME
  const password =
    process.env.NEXT_AUTHENTICATOR_PASSWORD
  const credentials = `${username}:${password}`
  const encondeCredentials = Buffer.from(credentials).toString('base64')

  config.headers.Authorization =
    token !== '' ? `Bearer ${token}` : `Basic ${encondeCredentials}`
  return config
})

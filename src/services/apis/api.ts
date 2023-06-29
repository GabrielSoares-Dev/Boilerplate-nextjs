import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
})

// Interceptor for bearer token and basic authentication
// api.interceptors.request.use((config) => {
//   const username =
//     process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_AUTHENTICATOR_USERNAME
//   const password =
//     process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_AUTHENTICATOR_PASSWORD
//   const credentials = `${username}:${password}`
//   const encondeCredentials = Buffer.from(credentials).toString('base64')

//   config.headers.Authorization = `Basic ${encondeCredentials}`
//   return config
// })

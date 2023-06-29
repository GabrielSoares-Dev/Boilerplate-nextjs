import { api } from '@/services'
import type { LoginProps, ContentLogin } from '@/services/types'
import type { DefaultResponseWithContent } from '@/@types/base-types'
import { browserName } from 'react-device-detect'

export const authServices = {
  login: async ({ email, password }: LoginProps) => {
    const body = {
      email,
      password,
      deviceName: browserName,
    }
    const response = await api.post<DefaultResponseWithContent<ContentLogin>>(
      '/v1/auth/login',
      body,
    )
    return response.data.content
  },
}

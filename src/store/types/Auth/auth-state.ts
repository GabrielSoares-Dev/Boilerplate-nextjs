import type { ContentLogin } from '@/services/types'

export type AuthState = {
  data: ContentLogin
  setUserState: (user: ContentLogin) => void
  clearState: () => void
}

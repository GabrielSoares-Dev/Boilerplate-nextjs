import type { ContentLogin } from '@/services/types'

export type AuthState = {
  user: ContentLogin
  setUserState: (user: ContentLogin) => void
}

import { create } from 'zustand'
import { AuthState } from '@/store/types'
import { createJSONStorage, persist } from 'zustand/middleware'

export const useAuthStore = create(
  persist<AuthState>(
    (set, get) => ({
      data: {
        accessToken: {
          token: '',
          type: 'bearer',
        },
        user: {
          id: 0,
          name: '',
          email: '',
          roleName: '',
          phoneNumber: '',
          permissions: [],
          createdAt: '',
        },
      },
      setUserState: (data) => set(() => ({ data })),
      clearState: () =>
        set(() => ({
          data: {
            accessToken: {
              token: '',
              type: 'bearer',
            },
            user: {
              id: 0,
              name: '',
              email: '',
              roleName: '',
              phoneNumber: '',
              permissions: [],
              createdAt: '',
            },
          },
        })),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

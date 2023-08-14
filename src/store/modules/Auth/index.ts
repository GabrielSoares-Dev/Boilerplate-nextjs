import { create } from 'zustand'
import { AuthState } from '@/store/types'
import {  persist } from 'zustand/middleware'
import { setCookie,getCookie   } from 'cookies-next';

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
      storage: {
        getItem: () => {
          const storedData = getCookie('auth')
          return storedData ? JSON.parse(storedData as string) : undefined
        },
        setItem: (key, value) => {
          setCookie('auth', JSON.stringify(value))
        },
        removeItem: () => {
          setCookie('auth', '')
        },
      },
    },
  ),
)

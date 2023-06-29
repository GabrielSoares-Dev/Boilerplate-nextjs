import Login from '@/app/(public)/login/page'
import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'
import { faker } from '@faker-js/faker'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { ToastContainerCustom } from '@components'
import { useAuthStore } from '@store'
import { loginMock } from '@tests/helpers'
import mockRouter from 'next-router-mock'

const mockEmail = faker.internet.email()
const mockPassword = faker.internet.password()

const mockStateUser = {
  accessToken: {
    type: 'bearer',
    token: 'Ng.b97dVl42kAceEHxwSr1Tun4n9F5OsGmwr_dzZZEO_BhjwQW9PImQ4hx1wl4e',
  },
  user: {
    id: 2,
    name: 'Isis e Aline Pães e Doces Ltda',
    email: 'posvenda@daniloeheloisaentulhosltda.com.br',
    phoneNumber: '14991538823',
    roleName: 'ADMIN',
    createdAt: '11/06/2023 20:29:46',
    permissions: [],
  },
}
const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ToastContainerCustom />
    {children}
  </QueryClientProvider>
)
describe('Login', () => {
  it('Should be render login', async () => {
    const { getByText, getByPlaceholderText } = render(<Login />, { wrapper })

    const InputEmail = getByPlaceholderText('Insira seu endereço de email')
    const InputPassword = getByPlaceholderText('*************')
    const loginButton = getByText('Entrar')

    expect(InputEmail).toBeInTheDocument()
    expect(InputPassword).toBeInTheDocument()
    expect(loginButton).toBeInTheDocument()
  })
  it('Should be inputs is empty', async () => {
    const { getByText } = render(<Login />, { wrapper })
    const loginButton = getByText('Entrar')

    act(() => {
      userEvent.click(loginButton)
    })

    await waitFor(() => {
      const toast = getByText('Credenciais Inválidas')
      expect(toast).toBeVisible()
    })
  })
  it('Should be invalid credentials by api', async () => {
    loginMock(401)
    const { getByPlaceholderText, getByText } = render(<Login />, { wrapper })
    const InputEmail = getByPlaceholderText('Insira seu endereço de email')
    const InputPassword = getByPlaceholderText('*************')
    const loginButton = getByText('Entrar')

    act(() => {
      fireEvent.change(InputEmail, {
        target: { value: mockEmail },
      })
      fireEvent.change(InputPassword, {
        target: { value: mockPassword },
      })

      userEvent.click(loginButton)
    })

    await waitFor(() => {
      const toast = getByText('Credenciais Inválidas')
      expect(toast).toBeVisible()
    })
  })

  it('Should be school in analised or canceled', async () => {
    loginMock(403)
    const { getByPlaceholderText, getByText } = render(<Login />, { wrapper })
    const InputEmail = getByPlaceholderText('Insira seu endereço de email')
    const InputPassword = getByPlaceholderText('*************')
    const loginButton = getByText('Entrar')

    act(() => {
      fireEvent.change(InputEmail, {
        target: { value: mockEmail },
      })
      fireEvent.change(InputPassword, {
        target: { value: mockPassword },
      })

      userEvent.click(loginButton)
    })

    await waitFor(() => {
      const toast = getByText(
        'Sua conta ainda está em revisão por favor aguarde um pouco',
      )
      expect(toast).toBeVisible()
    })
  })
  it('Should be  login success', async () => {
    loginMock(200)
    act(() => {
      mockRouter.push('/login')
    })
    const { result } = renderHook(() => useAuthStore())
    const { getByPlaceholderText, getByText } = render(<Login />, { wrapper })
    const InputEmail = getByPlaceholderText('Insira seu endereço de email')
    const InputPassword = getByPlaceholderText('*************')
    const loginButton = getByText('Entrar')

    act(() => {
      fireEvent.change(InputEmail, {
        target: { value: mockEmail },
      })
      fireEvent.change(InputPassword, {
        target: { value: mockPassword },
      })

      userEvent.click(loginButton)
    })

    await waitFor(() => {
      expect(result.current.user).toStrictEqual(mockStateUser)
      const atualPath = mockRouter.asPath
      expect(atualPath).toBe('/home')
    })
  })
})

import { renderHook } from '@testing-library/react'
import { faker } from '@faker-js/faker'
import { act } from 'react-dom/test-utils'
import { useLogin } from '@/app/(public)/login/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { loginMock } from '@tests/helpers'
import { ToastContainerCustom } from '@components'

const mockData = {
  email: faker.internet.email(),
  password: faker.internet.password(),
}
const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ToastContainerCustom />
    {children}
  </QueryClientProvider>
)
describe('useLogin', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useLogin(), { wrapper })

    expect(result.current.errors).toBeDefined()
    expect(result.current.isLoading).toBeDefined()
    expect(result.current.register).toBeDefined()
    expect(result.current.handleSubmit).toBeDefined()
    expect(result.current.onSubmit).toBeDefined()
  })

  it('Should be call on submit', async () => {
    loginMock(200)
    const { result } = renderHook(() => useLogin(), { wrapper })

    const onSubmitMock = jest.spyOn(result.current, 'onSubmit')

    act(() => {
      result.current.onSubmit(mockData)
    })

    expect(onSubmitMock).toHaveBeenCalled()
  })
})

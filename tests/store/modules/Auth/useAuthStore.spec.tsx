import { renderHook } from '@testing-library/react'
import { useAuthStore } from '@store'
import { act } from 'react-dom/test-utils'

const mockUserState = {
  accessToken: {
    type: 'bearer',
    token: 'Ng.b97dVl42kAceEHxwSr1Tun4n9F5OsGmwr_dzZZEO_BhjwQW9PImQ4hx1wl4e',
  },
  user: {
    id: 2,
    name: 'Isis e Aline Pães e Doces Ltda',
    email: 'posvenda@daniloeheloisaentulhosltda.com.br',
    phoneNumber: '14991538823',
    roleName: 'SCHOOL',
    createdAt: '11/06/2023 20:29:46',
    permissions: [],
  },
}
describe('useAuthStore', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useAuthStore())

    expect(result.current.data).toBeDefined()
    expect(result.current.setUserState).toBeDefined()
    expect(result.current.clearState).toBeDefined()
  })
  it('Should be set user state', () => {
    const { result } = renderHook(() => useAuthStore())

    act(() => {
      result.current.setUserState(mockUserState)
    })

    expect(result.current.data).toBe(mockUserState)
  })
  it('Should be set user state in local Storage', () => {
    const { result } = renderHook(() => useAuthStore())

    act(() => {
      result.current.setUserState(mockUserState)
    })

    const userInLocalStorage = sessionStorage.getItem('auth')

    expect(userInLocalStorage).toEqual(expect.anything())
  })
  it('Should be clear state', () => {
    const { result } = renderHook(() => useAuthStore())

    act(() => {
      result.current.clearState()
    })

    expect(result.current.data.accessToken.token).toBe('')
  })
})

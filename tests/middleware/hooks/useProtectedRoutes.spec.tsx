import { renderHook } from '@testing-library/react'
import { useProtectedRoutes } from '@/middlewares/hooks'
import { mockUseProtectedRoutes } from '@tests/helpers'

describe('useProtectedRoutes', () => {
  it('Should return correct properties', () => {
    mockUseProtectedRoutes.mockReturnValue({ isAuthenticated: true })
    const { result } = renderHook(() => useProtectedRoutes())

    expect(result.current.isAuthenticated).toBeDefined()
  })
})

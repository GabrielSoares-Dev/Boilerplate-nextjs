import { renderHook } from '@testing-library/react'
import { useProtectedMiddleware } from '@/middlewares/hooks'
import { mockUseProtectedMiddleware } from '@tests/helpers'

describe('useProtectedMiddleware', () => {
  it('Should return correct properties', () => {
    mockUseProtectedMiddleware.mockReturnValue({ isAuthenticated: true })
    const { result } = renderHook(() => useProtectedMiddleware())

    expect(result.current.isAuthenticated).toBeDefined()
  })
})

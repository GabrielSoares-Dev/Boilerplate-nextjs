import { renderHook } from '@testing-library/react'
import { usePublicRoutes } from '@/middlewares/hooks'
import { mockUsePublicRoutes } from '@tests/helpers'

describe('usePublicRoutes', () => {
  it('Should return correct properties', () => {
    mockUsePublicRoutes.mockReturnValue({ isAuthenticated: true })
    const { result } = renderHook(() => usePublicRoutes())

    expect(result.current.isAuthenticated).toBeDefined()
  })
})

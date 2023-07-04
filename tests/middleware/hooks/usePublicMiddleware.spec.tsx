import { renderHook } from '@testing-library/react'
import { usePublicMiddleware } from '@/middlewares/hooks'
import { mockUsePublicMiddleware } from '@tests/helpers'

describe('usePublicMiddleware', () => {
  it('Should return correct properties', () => {
    mockUsePublicMiddleware.mockReturnValue({ isAuthenticated: true })
    const { result } = renderHook(() => usePublicMiddleware())

    expect(result.current.isAuthenticated).toBeDefined()
  })
})

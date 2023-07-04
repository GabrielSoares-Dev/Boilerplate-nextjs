import { renderHook } from '@testing-library/react'
import { usePermissionMiddleware } from '@/middlewares/hooks'
import { mockUsePermissionMiddleware } from '@tests/helpers'

describe('usePermissionMiddleware', () => {
  it('Should return correct properties', () => {
    mockUsePermissionMiddleware.mockReturnValue({ hasPermission: true })
    const { result } = renderHook(() => usePermissionMiddleware())

    expect(result.current.hasPermission).toBeDefined()
  })
})

import { renderHook } from '@testing-library/react'
import { useAuthStore } from '@store'
import { act } from 'react-dom/test-utils'
import { mockUserState } from '@tests/helpers'
import { usePermissions } from '@hooks'

describe('usePermissions', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => usePermissions())

    expect(result.current.checkHasPermission).toBeDefined()
    expect(result.current.checkPermissionPerUrl).toBeDefined()
  })
  // it('Should be has permission', () => {
  //   const { result: resultAuthStore } = renderHook(() => useAuthStore())
  //   act(() => {
  //     resultAuthStore.current.setUserState( mockUserState as any)
  //   })
  //   const { result } = renderHook(() => usePermissions())

  //   const hasPermission = result.current.checkHasPermission('createRole')
  //   expect(hasPermission).toBe(false)
  // })
  // it('Should be not has permission', () => {
  //   const { result: resultAuthStore } = renderHook(() => useAuthStore())
  //   act(() => {
  //     resultAuthStore.current.setUserState( mockUserState as any)
  //   })
  //   const { result } = renderHook(() => usePermissions())

  //   const hasPermission = result.current.checkHasPermission('createRole')
  //   expect(hasPermission).toBe(false)
  // })
  // it('Should be has permission per url', () => {
  //   const { result: resultAuthStore } = renderHook(() => useAuthStore())
  //   act(() => {
  //     resultAuthStore.current.setUserState( mockUserState as any)
  //   })
  //   const { result } = renderHook(() => usePermissions())

  //   const hasPermission = result.current.checkPermissionPerUrl('/students')
  //   expect(hasPermission).toBe(true)
  // })
  // it('Should be not has permission per url', () => {
  //   const { result: resultAuthStore } = renderHook(() => useAuthStore())
  //   act(() => {
  //     resultAuthStore.current.setUserState( mockUserState as any)
  //   })
  //   const { result } = renderHook(() => usePermissions())

  //   const hasPermission = result.current.checkPermissionPerUrl('/permissions')
  //   expect(hasPermission).toBe(false)
  // })
})

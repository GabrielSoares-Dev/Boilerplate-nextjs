import { renderHook } from '@testing-library/react'
import { useModalConfirmationStore } from '@store'
import { act } from 'react-dom/test-utils'

describe('useModalConfirmationStore ', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useModalConfirmationStore())

    expect(result.current.payload).toBeDefined()
    expect(result.current.setCloseModalConfirmation).toBeDefined()
    expect(result.current.setLoading).toBeDefined()
    expect(result.current.setOpenModalConfirmation).toBeDefined()
  })
  it('Should be open modal', () => {
    const { result } = renderHook(() => useModalConfirmationStore())

    act(() => {
      result.current.setOpenModalConfirmation({ text: 'test', type: 'ERROR' })
    })

    expect(result.current.payload.isOpen).toBe(true)
    expect(result.current.payload.text).toBe('test')
  })
  it('Should be set loading', () => {
    const { result } = renderHook(() => useModalConfirmationStore())

    act(() => {
      result.current.setLoading(true)
    })

    expect(result.current.payload.isLoading).toBe(true)
  })
  it('Should be close modal', () => {
    const { result } = renderHook(() => useModalConfirmationStore())

    act(() => {
      result.current.setCloseModalConfirmation()
    })

    expect(result.current.payload.isOpen).toBe(false)
  })
})

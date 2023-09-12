import React from 'react'
import { ConfirmationModal } from '@components'
import { useModalConfirmationStore } from '@store'
import { render, renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

describe('ConfirmationModal', () => {
  it('Should be render a modal', async () => {
    const { result } = renderHook(() => useModalConfirmationStore())
    act(() => {
      result.current.setOpenModalConfirmation({
        text: 'test',
        type: 'WARNING',
      })
    })
    const { getByText } = render(<ConfirmationModal />)

    const title = getByText('test')
    const buttonAgree = getByText('Sim')
    const buttonDisagree = getByText('Não')

    expect(title).toBeInTheDocument()
    expect(buttonAgree).toBeInTheDocument()
    expect(buttonDisagree).toBeInTheDocument()
  })
})

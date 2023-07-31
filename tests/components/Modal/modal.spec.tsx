import { Modal } from '@components'
import { render } from '@testing-library/react'
import React from 'react'

describe('Modal', () => {
  it('Should be render a modal', () => {
    const { getByText, getByRole } = render(<Modal isOpen>Test</Modal>)

    const modal = getByText('Test')
    const closeButton = getByRole('close-button')

    expect(modal).toBeInTheDocument()
    expect(closeButton).toBeInTheDocument()
    expect(modal).toHaveClass(
      'w-max mx-auto p-6 bg-gray-700 rounded-xl',
    )
  })
})

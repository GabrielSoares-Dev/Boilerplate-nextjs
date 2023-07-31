import { BackDrop } from '@components'
import { render } from '@testing-library/react'
import React from 'react'

describe('BackDrop', () => {
  it('Should be render a backdrop', () => {
    const { getByText } = render(<BackDrop isOpen>Test</BackDrop>)

    const backdrop = getByText('Test')
    expect(backdrop).toBeInTheDocument()
    expect(backdrop).toHaveClass(
      'z-50 fixed top-0 left-0 right-0 bottom-0 flex items-center w-full h-full p-4 bg-gray-800 bg-opacity-80 overflow-y-auto',
    )
  })
})

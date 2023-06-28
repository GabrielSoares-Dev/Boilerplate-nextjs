import { InputLabel } from '@components'
import { render } from '@testing-library/react'
import React from 'react'

describe('InputLabel', () => {
  it('Should be render a input label', () => {
    const { getByText } = render(<InputLabel>test</InputLabel>)

    const inputLabel = getByText('test')
    expect(inputLabel).toBeInTheDocument()
  })
})

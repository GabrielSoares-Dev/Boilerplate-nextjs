import { TextAreaLabel } from '@components'
import { render } from '@testing-library/react'
import React from 'react'

describe('TextAreaLabel', () => {
  it('Should be render a text area label', () => {
    const { getByText } = render(<TextAreaLabel>test</TextAreaLabel>)

    const textAreaLabel = getByText('test')
    expect(textAreaLabel).toBeInTheDocument()
  })
})

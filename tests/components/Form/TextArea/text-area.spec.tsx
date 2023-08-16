import { TextArea, ErrorMessage } from '@components'
import { render, waitFor } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'

describe('TextArea', () => {
  it('Should be render a text area', () => {
    const { getByPlaceholderText } = render(<TextArea placeholder="test" />)

    const textArea = getByPlaceholderText('test')
    expect(textArea).toBeInTheDocument()
  })
  it('Should be write in text area', async () => {
    const { getByPlaceholderText } = render(<TextArea placeholder="test" />)

    const textArea = getByPlaceholderText('test')
    act(() => {
      userEvent.type(textArea, 'test')
    })

    await waitFor(() => {
      expect(textArea).toHaveValue('test')
    })
  })
  it('Should be is readonly', () => {
    const { getByPlaceholderText } = render(
      <TextArea placeholder="test" readOnly />,
    )
    const textArea = getByPlaceholderText('test')

    expect(textArea).toHaveAttribute('readOnly')
  })
  it('Should be is disabled', () => {
    const { getByPlaceholderText } = render(
      <TextArea placeholder="test" disabled />,
    )
    const textArea = getByPlaceholderText('test')

    expect(textArea).toHaveAttribute('disabled')
  })
  it('Should be show a error message', async () => {
    const { getByText } = render(
      <TextArea
        placeholder="test"
        hasError
        errorMessage={() => <ErrorMessage>error message test</ErrorMessage>}
      />,
    )

    const errorMessage = getByText('error message test')
    expect(errorMessage).toBeInTheDocument()
  })
})

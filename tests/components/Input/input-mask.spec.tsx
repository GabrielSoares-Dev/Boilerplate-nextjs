import { InputMask, ErrorMessage } from '@/components'
import { render, waitFor, fireEvent } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'

describe('InputMask', () => {
  it('Should be render a input', () => {
    const { getByPlaceholderText } = render(
      <InputMask mask="" placeholder="test" />,
    )

    const input = getByPlaceholderText('test')
    expect(input).toBeInTheDocument()
  })
  it('Should be write in input', async () => {
    const { getByPlaceholderText } = render(
      <InputMask mask="" placeholder="test" type="text" />,
    )

    const input = getByPlaceholderText('test')
    act(() => {
      userEvent.type(input, 'test')
    })

    await waitFor(() => {
      expect(input).toHaveValue('test')
    })
  })
  it('Should be is readonly', () => {
    const { getByPlaceholderText } = render(
      <InputMask mask="" placeholder="test" readOnly />,
    )

    const input = getByPlaceholderText('test')

    expect(input).toHaveAttribute('readOnly')
  })
  it('Should be is disabled', () => {
    const { getByPlaceholderText } = render(
      <InputMask mask="" placeholder="test" disabled />,
    )
    const input = getByPlaceholderText('test')

    expect(input).toHaveAttribute('disabled')
  })
  it('Should be show a error message', async () => {
    const { getByText } = render(
      <InputMask
        mask=""
        placeholder="test"
        hasError
        errorMessage={() => <ErrorMessage>error message test</ErrorMessage>}
      />,
    )

    const errorMessage = getByText('error message test')
    expect(errorMessage).toBeInTheDocument()
  })
  it('Should be format correct', async () => {
    const { getByPlaceholderText } = render(
      <InputMask
        mask="99.999.999/9999-99"
        placeholder="test"
        hasError
        errorMessage={() => <ErrorMessage>error message test</ErrorMessage>}
      />,
    )
    const input = getByPlaceholderText('test')
    act(() => {
      fireEvent.change(input, {
        target: { value: '23323233232323' },
      })
    })

    await waitFor(() => {
      expect(input).toHaveValue('23.323.233/2323-23')
    })
  })
})

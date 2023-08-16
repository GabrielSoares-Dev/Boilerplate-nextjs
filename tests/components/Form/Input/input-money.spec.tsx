import { InputMoney, ErrorMessage } from '@/components'
import { render, waitFor, fireEvent } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'

describe('InputMoney', () => {
  it('Should be render a input', () => {
    const { getByPlaceholderText } = render(<InputMoney placeholder="test" />)

    const input = getByPlaceholderText('test')
    expect(input).toBeInTheDocument()
  })

  it('Should be is readonly', () => {
    const { getByPlaceholderText } = render(
      <InputMoney placeholder="test" readOnly />,
    )

    const input = getByPlaceholderText('test')

    expect(input).toHaveAttribute('readOnly')
  })
  it('Should be is disabled', () => {
    const { getByPlaceholderText } = render(
      <InputMoney placeholder="test" disabled />,
    )
    const input = getByPlaceholderText('test')

    expect(input).toHaveAttribute('disabled')
  })
  it('Should be show a error message', async () => {
    const { getByText } = render(
      <InputMoney
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
      <InputMoney
        decimalSeparator=","
        groupSeparator="."
        prefix="R$ "
        defaultValue={'1.22'}
        allowNegativeValue={false}
        type="text"
        maxLength={10}
        placeholder="test"
      />,
    )
    const input = getByPlaceholderText('test')

    await waitFor(() => {
      expect(input).toHaveValue('R$ 1,22')
    })
  })
})

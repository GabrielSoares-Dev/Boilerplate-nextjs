import { Select, SelectOption, SelectLabel } from '@components'
import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'

describe('Select', () => {
  it('Should be render a select', () => {
    const { getByPlaceholderText } = render(
      <Select placeholder="test"></Select>,
    )

    const select = getByPlaceholderText('test')
    expect(select).toBeInTheDocument()
  })
  it('Should be select option', () => {
    const { getByPlaceholderText, getByText } = render(
      <Select placeholder="test">
        <SelectOption value="test">test</SelectOption>
      </Select>,
    )
    const select = getByPlaceholderText('test')
    act(() => {
      fireEvent.change(select, { target: { value: 'test' } })
    })

    expect(getByText('test')).toBeInTheDocument()
  })
  it('Should be select with select label', () => {
    const { getByText } = render(
      <Select label={() => <SelectLabel>test</SelectLabel>}></Select>,
    )
    const label = getByText('test')

    expect(label).toBeInTheDocument()
  })
})

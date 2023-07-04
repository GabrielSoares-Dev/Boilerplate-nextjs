import { Button } from '@components'
import { render } from '@testing-library/react'
import React from 'react'

describe('Button', () => {
  it('Should be render a button', () => {
    const { getByText } = render(<Button>test</Button>)

    const button = getByText('test')
    expect(button).toBeInTheDocument()
  })
  it('Should be button disabled', () => {
    const { getByText } = render(<Button disabled>test</Button>)

    const button = getByText('test')
    expect(button).toBeDisabled()
  })
  it('Should be is loading', () => {
    const { getByText } = render(<Button isLoading>test</Button>)

    const button = getByText('Processando...')
    expect(button).toBeDisabled()
  })
})

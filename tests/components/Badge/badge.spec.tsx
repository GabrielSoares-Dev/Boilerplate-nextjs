import { Badge } from '@components'
import { render } from '@testing-library/react'
import React from 'react'

describe('Badge', () => {
  it('Should be render a badge default', () => {
    const { getByText } = render(<Badge>Test</Badge>)
    const badge = getByText('Test')

    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass(
      'text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300',
    )
  })
})

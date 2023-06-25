import Home from '@/app/page'
import { render } from '@testing-library/react'

import React from 'react'

describe('Home', () => {
  it('Should be render correct', () => {
    const { getByText } = render(<Home />)

    expect(getByText('Boilerplate nextjs')).toBeInTheDocument()
  })
})

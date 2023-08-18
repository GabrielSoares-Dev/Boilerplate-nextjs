import React from 'react'
import { CommonAccordion } from '@components'
import { render } from '@testing-library/react'
describe('CommonAccordion', () => {
  it('Should be render a accordion closed', () => {
    const { getByText } = render(
      <CommonAccordion title="Test accordion">
        <p>Test</p>
      </CommonAccordion>,
    )

    const title = getByText('Test accordion')

    expect(title).toBeInTheDocument()
  })
  it('Should be render a accordion open', () => {
    const { getByText } = render(
      <CommonAccordion title="Test accordion" isOpen>
        <p>Test</p>
      </CommonAccordion>,
    )

    const content = getByText('Test')

    expect(content).toBeInTheDocument()
  })
})

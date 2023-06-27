import { Toast } from '@components'
import { render } from '@testing-library/react'
import React from 'react'

describe('Toast', () => {
  it('Should be render a toast', () => {
    const { getByText } = render(
      <Toast title="test" description="test description" toastType="SUCCESS" />,
    )

    const toast = getByText('test')
    expect(toast).toBeInTheDocument()
  })
  it('Should be render a type success', () => {
    const { getByRole } = render(
      <Toast title="test" description="test description" toastType="SUCCESS" />,
    )

    const successIcon = getByRole('success-toast-icon')

    expect(successIcon).toBeInTheDocument()
  })
  it('Should be render a type error', () => {
    const { getByRole } = render(
      <Toast title="test" description="test description" toastType="ERROR" />,
    )

    const errorIcon = getByRole('error-toast-icon')

    expect(errorIcon).toBeInTheDocument()
  })
  it('Should be render a type warning or info', () => {
    const { getByRole } = render(
      <Toast title="test" description="test description" toastType="WARNING" />,
    )

    const warningInfoIcon = getByRole('warning-info-toast-icon')

    expect(warningInfoIcon).toBeInTheDocument()
  })
})

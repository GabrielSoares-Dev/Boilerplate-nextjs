import { render } from '@testing-library/react'
import { mockUseProtectedMiddleware } from '@tests/helpers'
import { ProtectedMiddleware } from '@middlewares'

describe('Protected Middleware', () => {
  it('Should be render page if user is authenticated', async () => {
    mockUseProtectedMiddleware.mockReturnValue({ isAuthenticated: true })
    const { getByText } = render(
      <ProtectedMiddleware>
        <div>Content</div>
      </ProtectedMiddleware>,
    )

    const protectedText = getByText('Content')

    expect(protectedText).toBeInTheDocument()
  })
  it('Should be not render page if user is not authenticated', async () => {
    mockUseProtectedMiddleware.mockReturnValue({ isAuthenticated: false })
    const { queryByText } = render(
      <ProtectedMiddleware>
        <div>Content</div>
      </ProtectedMiddleware>,
    )

    expect(queryByText('Content')).toBeNull()
  })
})

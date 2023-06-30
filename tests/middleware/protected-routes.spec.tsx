import { render } from '@testing-library/react'
import { mockUseProtectedRoutes } from '@tests/helpers'
import { ProtectedRoutes } from '@middlewares'

describe('Protected Route Middleware', () => {
  it('Should be render page if user is authenticated', async () => {
    mockUseProtectedRoutes.mockReturnValue({ isAuthenticated: true })
    const { getByText } = render(
      <ProtectedRoutes>
        <div>Content</div>
      </ProtectedRoutes>,
    )

    const protectedText = getByText('Content')

    expect(protectedText).toBeInTheDocument()
  })
  it('Should be not render page if user is not authenticated', async () => {
    mockUseProtectedRoutes.mockReturnValue({ isAuthenticated: false })
    const { queryByText } = render(
      <ProtectedRoutes>
        <div>Content</div>
      </ProtectedRoutes>,
    )

    expect(queryByText('Content')).toBeNull()
  })
})

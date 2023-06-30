import { render } from '@testing-library/react'
import { mockUsePublicRoutes } from '@tests/helpers'
import { PublicRoutes } from '@middlewares'

describe('Public Route Middleware', () => {
  it('Should be render page if user is not authenticated', async () => {
    mockUsePublicRoutes.mockReturnValue({ isAuthenticated: false })
    const { getByText } = render(
      <PublicRoutes>
        <div>Content</div>
      </PublicRoutes>,
    )

    const protectedText = getByText('Content')

    expect(protectedText).toBeInTheDocument()
  })
  it('Should be not render page if user is authenticated', async () => {
    mockUsePublicRoutes.mockReturnValue({ isAuthenticated: true })
    const { queryByText } = render(
      <PublicRoutes>
        <div>Content</div>
      </PublicRoutes>,
    )

    expect(queryByText('Content')).toBeNull()
  })
})

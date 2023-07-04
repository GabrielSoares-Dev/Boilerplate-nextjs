import { render } from '@testing-library/react'
import { mockUsePublicMiddleware } from '@tests/helpers'
import { PublicMiddleware } from '@middlewares'

describe('Public Middleware', () => {
  it('Should be render page if user is not authenticated', async () => {
    mockUsePublicMiddleware.mockReturnValue({ isAuthenticated: false })
    const { getByText } = render(
      <PublicMiddleware>
        <div>Content</div>
      </PublicMiddleware>,
    )

    const protectedText = getByText('Content')

    expect(protectedText).toBeInTheDocument()
  })
  it('Should be not render page if user is authenticated', async () => {
    mockUsePublicMiddleware.mockReturnValue({ isAuthenticated: true })
    const { queryByText } = render(
      <PublicMiddleware>
        <div>Content</div>
      </PublicMiddleware>,
    )

    expect(queryByText('Content')).toBeNull()
  })
})

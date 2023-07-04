import { render } from '@testing-library/react'
import { mockUsePermissionMiddleware } from '@tests/helpers'
import { PermissionsMiddleware } from '@middlewares'

describe('Permissions Middleware', () => {
  it('Should be render page if user has permission', async () => {
    mockUsePermissionMiddleware.mockReturnValue({ hasPermission: true })
    const { getByText } = render(
      <PermissionsMiddleware>
        <div>Content</div>
      </PermissionsMiddleware>,
    )

    const protectedText = getByText('Content')

    expect(protectedText).toBeInTheDocument()
  })
  it('Should be not render page if user not has permission', async () => {
    mockUsePermissionMiddleware.mockReturnValue({ hasPermission: false })
    const { queryByText } = render(
      <PermissionsMiddleware>
        <div>Content</div>
      </PermissionsMiddleware>,
    )

    expect(queryByText('Content')).toBeNull()
  })
})

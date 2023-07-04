import { checkUserIsAuthenticated } from '@functions'
import { mockCheckUserIsAuthenticated } from '@tests/helpers'

describe('Check user is authenticated', () => {
  it('Should be user not authenticated', () => {
    mockCheckUserIsAuthenticated.mockReturnValue(false)
    const result = checkUserIsAuthenticated()
    expect(result).toBe(false)
  })
  // it('Should be user  authenticated', () => {
  //   mockCheckUserIsAuthenticated.mockReturnValue(true)
  //   const result = checkUserIsAuthenticated()
  //   expect(result).toBe(true)
  // })
})

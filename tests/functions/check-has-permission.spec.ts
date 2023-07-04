import { checkHasPermission } from '@functions'
import { mockCheckHasPermission } from '@tests/helpers'

describe('Check has permission', () => {
  it('Should be has permission', () => {
    mockCheckHasPermission.mockReturnValue(true)
    const result = checkHasPermission('createPermission')

    expect(result).toBe(true)
  })
  it('Should be not has permission', () => {
    mockCheckHasPermission.mockReturnValue(false)
    const result = checkHasPermission('createPermission')

    expect(result).toBe(false)
  })
})

import { checkHasError } from '@functions'

describe('Check has error', () => {
  it('Should be has error', () => {
    const result = checkHasError({ error: 'Has error' })

    expect(result).toBe(true)
  })
  it('Should be not has error', () => {
    const result = checkHasError(undefined)

    expect(result).toBe(false)
  })
})

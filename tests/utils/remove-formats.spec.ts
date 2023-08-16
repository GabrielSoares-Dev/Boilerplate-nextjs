import { removeFormatMoney } from '@utils'

describe('RemoveFormat', () => {
  it('Should be remove format  money', () => {
    const money = 'R$ 1,20'

    const result = removeFormatMoney(money)
    expect(result).toBe(1.2)
  })
})

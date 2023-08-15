import { formatCPF, formatPhoneNumber,formatMoney } from '@utils'

describe('Format', () => {
  it('Should be format a cpf', () => {
    const cpf = '14098437341'

    const result = formatCPF(cpf)
    expect(result).toBe('140.984.373-41')
  })

  it('Should be format a phone number', () => {
    const phoneNumber = '61989833743'

    const result = formatPhoneNumber(phoneNumber)
    expect(result).toBe('(61) 98983-3743')
  })
  it('Should be format a money', () => {
    const money = '1.2'

    const result = formatMoney(money)
    expect(result).toBe('R$ 1,20')
  })
})

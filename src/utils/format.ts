import { formatValue } from 'react-currency-input-field'
export const formatPhoneNumber = (value: string) =>
  value.replace(/[^0-9\b]/g, '').replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')

export const formatCPF = (value: string) =>
  value
    .replace(/[^0-9\b]/g, '')
    .replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    export const formatMoney = (value: string) => {
      return formatValue({
        value,
        groupSeparator: '.',
        decimalSeparator: ',',
        prefix: 'R$ ',
        decimalScale: 2,
      })
    }
    
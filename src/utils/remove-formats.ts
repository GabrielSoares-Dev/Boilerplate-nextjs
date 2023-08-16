export const removeFormatMoney = (value: string) => {
  if (!value) {
    return 0
  }
  const removeFormat = parseFloat(
    value
      .replace('R$', '')
      .replace(' ', '')
      .replaceAll('.', '')
      .replaceAll(',', '.'),
  )

  if (isNaN(removeFormat)) {
    return 0
  }
  return removeFormat
}

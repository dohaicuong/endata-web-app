import React from 'react'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})

export const moneyFormats = (number: number) => formatter.format(number)

const useMoneyFormats = (number: number) =>
  React.useMemo(() => formatter.format(number), [number])

export default useMoneyFormats

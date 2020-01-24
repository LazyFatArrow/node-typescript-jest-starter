import { Currency } from './types/Currency'
import { RatesMap } from './types/RatesMap'

export const convert = (amount: number, to: Currency, rates: RatesMap): number => {
  return amount * rates[to]
}
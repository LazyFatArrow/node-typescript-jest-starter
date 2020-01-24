import { RatesMap } from './types/RatesMap'
import { Currency } from './types/Currency'
import { convert } from './currency-converter'

describe('Currency Converter', () => {
  it('should convert amount to currency', () => {
    const rate = 3
    const amount = 3
    const rates: RatesMap = {
      [Currency.USD]: rate,
    }

    expect(convert(amount, Currency.USD, rates)).toEqual(9)
  })
})
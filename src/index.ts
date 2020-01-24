import { convert, Currency } from 'modules/currency-converter'

console.log(convert(3, Currency.USD, { [Currency.USD]: 3 }))
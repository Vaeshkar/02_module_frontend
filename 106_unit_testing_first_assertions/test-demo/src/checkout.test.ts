import { expect, test, describe } from "vitest";
import { VATRates } from './types';
import { calculateTotal } from './checkout';

describe('calculateTotal - multiple nets per country', () => {
  const netValues = [0, 50, 100, 199.99, 1000];

  (Object.entries(VATRates) as [keyof typeof VATRates, number][]).forEach(([country, rate]) => {
    netValues.forEach(net => {
      test(`calculates total for ${country} with net €${net}`, () => {
        const expected = net * (1 + rate);
        const result = calculateTotal(net, country);
        expect(result).toBe(expected);
      });
    });
  });
});
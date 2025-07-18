// Tests for calculateGroupBill function
// This function calculates total bill with tip and splits it among people

import { describe, it, expect } from 'vitest';
import { calculateGroupBill, BillCalculation } from './groupBillCalculator';

describe('calculateGroupBill', () => {
  // Test normal bill calculations
  // - Should correctly calculate subtotal from item prices array
  // - Should correctly calculate tip amount based on percentage
  // - Should correctly calculate total (subtotal + tip)
  // - Should correctly split total among specified number of people
  it('should correctly calculate subtotal, tip, total, and per person amount', () => {
    const itemPrices = [10, 15, 20];
    const tipPercentage = 15;
    const splitBetween = 3;

    const result = calculateGroupBill(itemPrices, tipPercentage, splitBetween);

    expect(result.subtotal).toBe(45);
    expect(result.tipAmount).toBe(6.75);
    expect(result.total).toBe(51.75);
    expect(result.perPerson).toBe(17.25);
  });
  // ------------------------------
  // Test with different tip percentages
  // - Should work with common tips: 15%, 18%, 20%, 25%
  // - Should work with 0% tip (no tip scenario)
  // - Should work with unusual percentages like 12.5% or 22.7%
  it('should correctly calculate tip for different tip percentages', () => {
    const itemPrices = [10, 15, 20, 25];
    const tipPercentage = 12.5;
    const splitBetween = 3;

    const result = calculateGroupBill(itemPrices, tipPercentage, splitBetween);

    expect(result.tipAmount).toBe(8.75);
  });
  // ------------------------------
  // Test with different group sizes
  // - Should work with 1 person (no splitting)
  // - Should work with 2, 4, 6, 8 people
  // - Should work with large groups (10+ people)
  it('should correctly calculate per person amount for different group sizes', () => {
    const itemPrices = [10, 15, 20];
    const tipPercentage = 15;
    const splitBetween = 6;

    const result = calculateGroupBill(itemPrices, tipPercentage, splitBetween);

    expect(result.perPerson).toBe(8.63);
  });
  // ------------------------------
  // Test rounding behavior
  // - Should round monetary values to 2 decimal places
  // - Should handle cases where division doesn't result in exact cents
  // - Test with prices that create rounding scenarios: $33.33 split 3 ways
  it('should currectly round monetary values', () => {
    const itemPrices = [33.33];
    const tipPercentage = 15;
    const splitBetween = 3;

    const result = calculateGroupBill(itemPrices, tipPercentage, splitBetween);

    expect(result.perPerson).toBe(12.78);
  });
  // ------------------------------
  // Test error handling
  // - Should throw error when splitBetween is 0
  // - Should throw error when splitBetween is negative
  // - Should throw error when any item price is negative
  // - Should handle empty itemPrices array (should result in $0.00)
  it('should throw error when splitBetween is 0', () => {
    const itemPrices = [10, 15, 20];
    const tipPercentage = 15;
    const splitBetween = 0;

    expect(() => {
      calculateGroupBill(itemPrices, tipPercentage, splitBetween);
    }).toThrowError();
  });
  // ------------------------------
  // Test edge cases
  // - Should handle very small amounts (pennies)
  // - Should handle very large amounts (hundreds of dollars)
  // - Should handle decimal item prices (e.g., $12.99, $8.50)
  it('should correctly calculate for very small and large amounts', () => {
    const itemPrices = [0.01, 100, 12.99, 8.50];
    const tipPercentage = 15;
    const splitBetween = 2;

    const result = calculateGroupBill(itemPrices, tipPercentage, splitBetween);

    expect(result.subtotal).toBe(121.5);
    expect(result.tipAmount).toBe(18.22);
    expect(result.total).toBe(139.73);
    expect(result.perPerson).toBe(69.86);
  });
  // ------------------------------
  // Test return object structure
  it('should return object with correct properties and values', () => {
    const itemPrices = [10, 15, 20];
    const tipPercentage = 15;
    const splitBetween = 3;
    
    const result = calculateGroupBill(itemPrices, tipPercentage, splitBetween);
    console.log(result);
    
    // - Should return object with correct properties: subtotal, tipAmount, total, perPerson
    // - All returned values should be numbers
    expect(typeof result.subtotal).toBe('number');
    expect(typeof result.tipAmount).toBe('number');
    expect(typeof result.total).toBe('number');
    expect(typeof result.perPerson).toBe('number');
    
    // - All monetary values should have appropriate precision
    expect(result.subtotal).toBeCloseTo(45, 2);
    expect(result.tipAmount).toBeCloseTo(6.75, 2);
    expect(result.total).toBeCloseTo(51.75, 2);
    expect(result.perPerson).toBeCloseTo(17.25, 2);
    
    // - Should return object with correct values
    expect(result).toEqual({
      subtotal: 45,
      tipAmount: 6.75,
      total: 51.75,
      perPerson: 17.25,
    });
  });
});

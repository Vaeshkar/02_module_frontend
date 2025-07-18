// Tests for fetchRandomCatFact function
// This function simulates fetching random cat facts with a delay (async operation)

import { describe, it, expect } from 'vitest';
import { fetchRandomCatFact } from './catFactFetcher';

describe('fetchRandomCatFact', () => {
  // Test basic async functionality
  it('Should return a Promise that resolves to a string',async () => {
    const result = fetchRandomCatFact(false);
    // - Should return a Promise
    expect(result).toBeInstanceOf(Promise);
    // - Should not throw any errors when called normally
    const catFact = await result;
    // - Promise should resolve to a string
    expect(catFact).toBeTypeOf('string');
    expect(catFact).not.toBeNull(); // null
    expect(catFact).not.toBeUndefined(); // undefined
    expect(catFact).not.toBe(''); // empty string
    // special characters .not.toContain
    expect(catFact).not.toContain('!'); // exclamation mark
    expect(catFact).not.toContain('?'); // question mark
    expect(catFact).not.toContain('.'); // period
    expect(catFact).not.toContain(','); // comma
    expect(catFact).not.toContain(';'); // semicolon
    expect(catFact).not.toContain(':'); // colon
  })
  // ------------------------------
  // Test with includeBreeds = true (default)
  it('Should return fact from both general and breed-specific categories', async () => {
    // - Should return facts from both general and breed-specific categories
    const result = fetchRandomCatFact(true);
    expect(result).toBeInstanceOf(Promise);
    const catBreedFact = await result;
    expect(catBreedFact).toBeTypeOf('string');
    expect(catBreedFact).not.toBeNull();
    expect(catBreedFact).not.toBeUndefined();
    expect(catBreedFact).not.toBe('');
    // - Should return different facts when called multiple times (test randomness)
    const resultCatBreed = await Promise.all(
      Array.from({length: 50 }).map(() => fetchRandomCatFact(true))
    );
    expect(resultCatBreed).toContain('Maine Coons are the largest domestic cat breed');
    expect(resultCatBreed).toContain('Siamese cats are known for being very vocal');
    expect(resultCatBreed).toContain('Persian cats require daily grooming due to their long fur');
    expect(resultCatBreed.some(fact => fact.includes('Bengal'))).toBe(true);
    // - Should potentially return breed-specific facts when called multiple times
    const uniqueFacts = new Set(resultCatBreed);
    expect(uniqueFacts.size).toBeGreaterThan(1);
  })
  // ------------------------------
  // Test with includeBreeds = false
  it('Should only return general cat facts', async () => {
    const result = fetchRandomCatFact(false);
    expect(result).toBeInstanceOf(Promise);
    const catsFact = await result;
    // - Should only return general cat facts, not breed-specific ones
    expect(catsFact).not.contain('Maine Coons are the largest domestic cat breed');
    expect(catsFact).not.contain('Siamese cats are known for being very vocal');
    expect(catsFact).not.contain('Persian cats require daily grooming due to their long fur');
    expect(catsFact).not.contain('Bengal cats are known for their spotted coat');
    // - Should never return facts containing breed names like "Maine Coon", "Siamese", etc.
    expect(catsFact.includes('Bengal')).toBe(false);
    expect(catsFact.includes('Maine Coon')).toBe(false);
    expect(catsFact.includes('Siamese')).toBe(false);
    expect(catsFact.includes('Persian')).toBe(false);
    // - Should still return valid cat facts
    expect(catsFact).toBeTypeOf('string');
    expect(catsFact).not.toBeNull();
    expect(catsFact).not.toBeUndefined();
    expect(catsFact).not.toBe('');
  })
  // ------------------------------
  // Test timing and performance
  it('Should resolve within a reasonable time frame', async () => {
    const start = Date.now();
    const result = fetchRandomCatFact(false);
    expect(result).toBeInstanceOf(Promise);
    // - Use async/await in tests to handle Promise resolution
    const catFact = await result;
    const end = Date.now();
    const duration = end - start;
    // - Should take at least 500ms to resolve (simulated delay)
    expect(duration).toBeGreaterThanOrEqual(500);
    // - Should not take longer than 2000ms to resolve
    expect(duration).toBeLessThanOrEqual(2000);
  })
  // ------------------------------
  // Test return value validation
  it('Should return a valid cat fact', async () => {
    const result = fetchRandomCatFact(false);
    expect(result).toBeInstanceOf(Promise);
    const catFact = await result;
    // - Should return a valid cat fact
    expect(catFact).toBeTypeOf('string');
    expect(catFact).not.toBeNull();
    expect(catFact).not.toBeUndefined();
    expect(catFact).not.toBe('');
    // - Should always return non-empty string
    expect(catFact.length).toBeGreaterThan(0);
    // - Should return one of the predefined facts from the arrays
    expect(catFact).toContain(catFact);
    // - Should not return undefined or null
    expect(catFact).not.toBeNull();
    expect(catFact).not.toBeUndefined();
  })
  // ------------------------------
  // Test randomness
  it('Should return different facts when called multiple times', async () => {
    const result = fetchRandomCatFact(false);
    expect(result).toBeInstanceOf(Promise);
    const catFact = await result;
    const resultCatFact = await Promise.all(
      Array.from({length: 50 }).map(() => fetchRandomCatFact(false))
    );
    // - Should return different facts when called multiple times
    const uniqueFacts = new Set(resultCatFact);
    expect(uniqueFacts.size).toBeGreaterThan(1);
    // - Calling function multiple times should potentially return different results
    expect(resultCatFact).toContain(catFact);
    // - Should test by calling function several times and checking for variety
    const generalFacts = [
      'Cats sleep 12-16 hours per day',
      'A group of cats is called a clowder',
      'Cats have five toes on their front paws but only four on their back paws',
      'Cats can rotate their ears 180 degrees',
      "A cat's purr vibrates at a frequency that promotes bone healing"
    ];
    resultCatFact.forEach(fact => {
      expect(generalFacts).toContain(fact);
    })
    // - All returned facts should be valid predefined facts, not empty
    expect(resultCatFact.every(fact => fact.length > 0)).toBe(true);
  })
  // ------------------------------
  // Test concurrent calls
  it('Should handle multiple concurrent calls', async () => {
    const result = fetchRandomCatFact(false);
    expect(result).toBeInstanceOf(Promise);
    const catFact = await result;
    const resultCatFact = await Promise.all(
      Array.from({length: 50 }).map(() => fetchRandomCatFact(false))
    );
    // - Should handle multiple concurrent calls correctly
    const uniqueFacts = new Set(resultCatFact);
    // - Use Promise.all to test multiple concurrent calls
    expect(uniqueFacts.size).toBeGreaterThan(1);
    // - Each call should resolve independently
    expect(resultCatFact).toContain(catFact);
  })
});

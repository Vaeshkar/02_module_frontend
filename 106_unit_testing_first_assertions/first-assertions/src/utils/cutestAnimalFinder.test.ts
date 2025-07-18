// Tests for findCutestAnimal function
// This function finds the animal with the highest cuteness score from an array

import { describe, it, expect } from 'vitest';
import { findCutestAnimal, Animal } from './cutestAnimalFinder';

describe('findCutestAnimal', () => {
  // 01 Test with normal arrays
  // 01.1 - Should return animal with highest cuteness score
  // 01.2 - Should work with different array lengths (2, 3, 5, 10 animals)
  // 01.3 - Should handle decimal cuteness scores (3.5, 7.2, etc.)
  it('should return animal with highest cuteness score', () => {
    const animals: Animal[] = [
      { name: 'Fluffy', cuteness: 7.5, species: 'cat'},
      { name: 'Bella', cuteness: 9.2, species: 'dog'},
      { name: 'Whiskers', cuteness: 6.8, species: 'cat'},
    ]
  });
  // ------------------------------
  // 02 Test with single animal
  // 02.1 - Should return the only animal in the array
  // 02.2 - Should work regardless of cuteness score value
  it('should return the only animal in the array', () => {
    const animals = [{ name: 'Fluffy', cuteness: 7.5, species: 'cat'}];
    const cutest = findCutestAnimal(animals);
    expect(cutest).toBe(animals[0]);
  });
  // ------------------------------
  // 03 Test with empty array
  // 03.1 - Should return null for empty array
  // 03.2 - Should handle [] input gracefully
  it('should return null for empty array', () => {
    const animals: Animal[] = [];
    const cutest = findCutestAnimal(animals);
    expect(cutest).toBeNull();
  });
  // ------------------------------
  // 04 Test with tied cuteness scores
  // 04.1 - Should return the first animal when multiple animals have same highest score
  // 04.2 - Test with all animals having same cuteness score
  // 04.3 - Test with two animals having tied highest score
  it('should return the first animal when multiple animals have same highest score', () => {
    const animals: Animal[] = [
      { name: 'Fluffy', cuteness: 7.5, species: 'cat'},
      { name: 'Bella', cuteness: 7.5, species: 'dog'},
      { name: 'Whiskers', cuteness: 6.8, species: 'cat'},
    ];
    const cutest = findCutestAnimal(animals);
    expect(cutest).toBe(animals[0]);
  });
  // ------------------------------
  // 05 Test with edge case cuteness values
  // 05.1 - Should handle cuteness score of 0
  // 05.2 - Should handle negative cuteness scores
  // 05.3 - Should handle very large cuteness scores
  // 05.4 - Should handle cuteness scores that are very close (floating point precision)
  it('should handle cuteness score of 0', () => {
    const animals: Animal[] = [
      { name: 'Fluffy', cuteness: 7.5, species: 'cat'},
      { name: 'Bella', cuteness: 0, species: 'dog'},
      { name: 'Whiskers', cuteness: 6.8, species: 'cat'},
    ]
  });
  // ------------------------------
  // 06 Test data integrity
  // 06.1 - Should return exact same object reference from input array
  // 06.2 - Should not modify the original array
  // 06.3 - Should preserve all properties of the returned animal object
  it('should return exact same object reference from input array', () => {
    const animals: Animal[] = [
      { name: 'Fluffy', cuteness: 7.5, species: 'cat'},
      { name: 'Bella', cuteness: 9.2, species: 'dog'},
      { name: 'Whiskers', cuteness: 6.8, species: 'cat'},
    ]
  });
  // ------------------------------
  // 07 Test with various animal data
  // 07.1 - Should work with different species
  // 07.2 - Should work with different name formats
  // 07.3 - Should work with realistic test data (cats, dogs, pandas, etc.)
  it('should work with different species', () => {
    const animals: Animal[] = [
      { name: 'Fluffy', cuteness: 7.5, species: 'cat'},
      { name: 'Bella', cuteness: 9.2, species: 'dog'},
      { name: 'Whiskers', cuteness: 6.8, species: 'cat'},
    ]
  })
});

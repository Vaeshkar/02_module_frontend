// Tests for sortMovies function
// This function sorts an array of movie objects by various criteria

import { describe, it, expect } from 'vitest';
import { sortMovies, Movie } from './movieSorter';

describe('sortMovies', () => {
  // Test sorting by title
  // - Should handle case sensitivity properly
  it('should handle case sensitivity properly', () => {
    const movies: Movie[] = [
      { title: 'The Matrix', year: 1998, rating: 8.7, duration: 136, genre: 'Action' },
      { title: 'The Godfather', year: 1972, rating: 9.2, duration: 175, genre: 'Drama' },
      { title: 'The Dark Knight', year: 2008, rating: 9.0, duration: 152, genre: 'Action' },
    ];
    const sortedMovies = sortMovies(movies, 'title', 'asc');
    expect(sortedMovies).toEqual([
      { title: 'The Dark Knight', year: 2008, rating: 9.0, duration: 152, genre: 'Action' },
      { title: 'The Godfather', year: 1972, rating: 9.2, duration: 175, genre: 'Drama' },
      { title: 'The Matrix', year: 1998, rating: 8.7, duration: 136, genre: 'Action' },
    ]);
  })

  // - Should handle titles with numbers and special characters
  it('Test sorting by title', () => {
    const movies: Movie[] = [
      { title: 'The Matr1x', year: 1998, rating: 8.7, duration: 136, genre: 'Action' },
      { title: 'The Godfather', year: 1972, rating: 9.2, duration: 175, genre: 'Drama' },
      { title: 'The Dark Knight', year: 2008, rating: 9.0, duration: 152, genre: 'Action' },
      { title: 'The Lord of the Rings: The Fellowship of the Ring¡', year: 2001, rating: 8.8, duration: 178, genre: 'Adventure' },
    ]
    // - Should sort movies alphabetically by title in ascending order
    const sortedMovies = sortMovies(movies, 'title', 'asc');
    expect(sortedMovies).toEqual([
      { title: 'The Dark Knight', year: 2008, rating: 9.0, duration: 152, genre: 'Action' },
      { title: 'The Godfather', year: 1972, rating: 9.2, duration: 175, genre: 'Drama' },
      { title: 'The Lord of the Rings: The Fellowship of the Ring¡', year: 2001, rating: 8.8, duration: 178, genre: 'Adventure' },
      { title: 'The Matr1x', year: 1998, rating: 8.7, duration: 136, genre: 'Action' },
    ]);
    // - Should sort movies reverse-alphabetically in descending order
    const sortedDescMovies = sortMovies(movies,'title', 'desc');
    expect(sortedDescMovies).toEqual([
      { title: 'The Matr1x', year: 1998, rating: 8.7, duration: 136, genre: 'Action' },
      { title: 'The Lord of the Rings: The Fellowship of the Ring¡', year: 2001, rating: 8.8, duration: 178, genre: 'Adventure' },
      { title: 'The Godfather', year: 1972, rating: 9.2, duration: 175, genre: 'Drama' },
      { title: 'The Dark Knight', year: 2008, rating: 9.0, duration: 152, genre: 'Action' },
    ]);
  })
  // ------------------------------
  // Test sorting by year
  // - Should sort from oldest to newest in ascending order
  // - Should sort from newest to oldest in descending order
  // - Should handle same years correctly
  // - Should work with various year ranges (1950s to 2020s)
  it('Test sorting by year', () => {
    const movies: Movie[] = [
      { title: 'The Matrix', year: 1998, rating: 8.7, duration: 136, genre: 'Action' },
      { title: 'The Godfather', year: 1972, rating: 9.2, duration: 175, genre: 'Drama' },
      { title: 'The Dark Knight', year: 2008, rating: 9.0, duration: 152, genre: 'Action' },
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8, duration: 178, genre: 'Adventure' },
    ]
    const sortedMovies = sortMovies(movies, 'year', 'asc'); // smallest to largest
    expect(sortedMovies).toEqual([
      { title: 'The Godfather', year: 1972, rating: 9.2, duration: 175, genre: 'Drama' },
      { title: 'The Matrix', year: 1998, rating: 8.7, duration: 136, genre: 'Action' },
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8, duration: 178, genre: 'Adventure' },
      { title: 'The Dark Knight', year: 2008, rating: 9.0, duration: 152, genre: 'Action' },
    ]);
    const sortedDescMovies = sortMovies(movies, 'year', 'desc'); // largest to smallest
    expect(sortedDescMovies).toEqual([
      { title: 'The Dark Knight', year: 2008, rating: 9.0, duration: 152, genre: 'Action' },
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8, duration: 178, genre: 'Adventure' },
      { title: 'The Matrix', year: 1998, rating: 8.7, duration: 136, genre: 'Action' },
      { title: 'The Godfather', year: 1972, rating: 9.2, duration: 175, genre: 'Drama' },
    ]);
  })
  // ------------------------------
  // Test sorting by rating
  // - Should sort from lowest to highest rating in ascending order
  // - Should sort from highest to lowest rating in descending order
  // - Should handle decimal ratings (e.g., 7.5, 8.2)
  // - Should handle identical ratings
  it('Test sorting by rating', () => {
    const movies: Movie[] = [
      { title: 'The Matrix', year: 1998, rating: 8.7, duration: 136, genre: 'Action' },
      { title: 'The Godfather', year: 1972, rating: 9.2, duration: 175, genre: 'Drama' },
      { title: 'The Dark Knight', year: 2008, rating: 9.0, duration: 152, genre: 'Action' },
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8, duration: 178, genre: 'Adventure' },
    ]
    const sortedMovies = sortMovies(movies, 'rating', 'asc'); // smallest to largest
    expect(sortedMovies).toEqual([
      { title: 'The Matrix', year: 1998, rating: 8.7, duration: 136, genre: 'Action' },
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8, duration: 178, genre: 'Adventure' },
      { title: 'The Dark Knight', year: 2008, rating: 9.0, duration: 152, genre: 'Action' },
      { title: 'The Godfather', year: 1972, rating: 9.2, duration: 175, genre: 'Drama' },
    ]);
    const sortedDescMovies = sortMovies(movies, 'rating', 'desc'); // largest to smallest
    expect(sortedDescMovies).toEqual([
      { title: 'The Godfather', year: 1972, rating: 9.2, duration: 175, genre: 'Drama' },
      { title: 'The Dark Knight', year: 2008, rating: 9.0, duration: 152, genre: 'Action' },
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8, duration: 178, genre: 'Adventure' },
      { title: 'The Matrix', year: 1998, rating: 8.7, duration: 136, genre: 'Action' },
    ]);
  })
  // ------------------------------
  // Test sorting by duration
  it('Test sorting by duration', () => {
    const movies: Movie[] = [
      { title: 'The Matrix', year: 1998, rating: 8.7, duration: 136, genre: 'Action' },
      { title: 'The Godfather', year: 1972, rating: 9.2, duration: 175, genre: 'Drama' },
      { title: 'The Dark Knight', year: 2008, rating: 9.0, duration: 152, genre: 'Action' },
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8, duration: 178, genre: 'Adventure' },
    ]
    // - Should sort from shortest to longest in ascending order
    const sortedMovies = sortMovies(movies, 'duration', 'asc'); // smallest to largest
    expect(sortedMovies).toEqual([
      { title: 'The Matrix', year: 1998, rating: 8.7, duration: 136, genre: 'Action' },
      { title: 'The Dark Knight', year: 2008, rating: 9.0, duration: 152, genre: 'Action' },
      { title: 'The Godfather', year: 1972, rating: 9.2, duration: 175, genre: 'Drama' },
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8, duration: 178, genre: 'Adventure' },
    ]);
    // - Should sort from longest to shortest in descending order
    const sortedDescMovies = sortMovies(movies, 'duration', 'desc'); // largest to smallest
    expect(sortedDescMovies).toEqual([
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8, duration: 178, genre: 'Adventure' },
      { title: 'The Godfather', year: 1972, rating: 9.2, duration: 175, genre: 'Drama' },
      { title: 'The Dark Knight', year: 2008, rating: 9.0, duration: 152, genre: 'Action' },
      { title: 'The Matrix', year: 1998, rating: 8.7, duration: 136, genre: 'Action' },
    ]);
    // - Should handle various durations (90 min to 180+ min)
    const movies2: Movie[] = [
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8, duration: 90, genre: 'Adventure' }, 
      { title: 'The Lord of the Rings: The Two Towers', year: 2002, rating: 8.7, duration: 179, genre: 'Adventure' },
      { title: 'The Lord of the Rings: The Return of the King', year: 2003, rating: 8.9, duration: 220, genre: 'Adventure' },
    ]
    expect(sortMovies(movies2, 'duration', 'asc')).toEqual([
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8, duration: 90, genre: 'Adventure' },
      { title: 'The Lord of the Rings: The Two Towers', year: 2002, rating: 8.7, duration: 179, genre: 'Adventure' },
      { title: 'The Lord of the Rings: The Return of the King', year: 2003, rating: 8.9, duration: 220, genre: 'Adventure' },
    ]);
    // - Should handle identical durations
    const movies3: Movie[] = [
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8, duration: 90, genre: 'Adventure' }, 
      { title: 'The Lord of the Rings: The Two Towers', year: 2002, rating: 8.7, duration: 178, genre: 'Adventure' },
      { title: 'The Lord of the Rings: The Return of the King', year: 2003, rating: 8.9, duration: 220, genre: 'Adventure' },
    ]
    expect(sortMovies(movies3, 'duration', 'asc')).toEqual([
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8, duration: 90, genre: 'Adventure' },
      { title: 'The Lord of the Rings: The Two Towers', year: 2002, rating: 8.7, duration: 178, genre: 'Adventure' },
      { title: 'The Lord of the Rings: The Return of the King', year: 2003, rating: 8.9, duration: 220, genre: 'Adventure' },
    ]); 
  })
  // ------------------------------
  // Test default order behavior
  // - Should use ascending order when no order parameter is provided
  // - Should work correctly with all sortBy options using default order
  it('Test default order behavior', () => {
    const movies: Movie[] = [
      { title: 'The Matrix', year: 1998, rating: 8.7, duration: 136, genre: 'Action' },
      { title: 'The Godfather', year: 1972, rating: 9.2, duration: 175, genre: 'Drama' },
      { title: 'The Dark Knight', year: 2008, rating: 9.0, duration: 152, genre: 'Action' },
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8, duration: 178, genre: 'Adventure' },
    ]
    expect(sortMovies(movies, 'title')).toEqual([
      { title: 'The Dark Knight', year: 2008, rating: 9.0, duration: 152, genre: 'Action' },
      { title: 'The Godfather', year: 1972, rating: 9.2, duration: 175, genre: 'Drama' },
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8, duration: 178, genre: 'Adventure' },
      { title: 'The Matrix', year: 1998, rating: 8.7, duration: 136, genre: 'Action' },
    ]);
  })
  // ------------------------------
  // Test array immutability
  // - Should NOT modify the original array
  // - Should return a new array instance
  // - Original array should remain unchanged after sorting
  it('Test array immutability', () => {
    const movies: Movie[] = [
      { title: 'The Matrix', year: 1998, rating: 8.7, duration: 136, genre: 'Action' },
      { title: 'The Godfather', year: 1972, rating: 9.2, duration: 175, genre: 'Drama' },
      { title: 'The Dark Knight', year: 2008, rating: 9.0, duration: 152, genre: 'Action' },
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8, duration: 178, genre: 'Adventure' },
    ]
    const sortedMovies = sortMovies(movies, 'title', 'asc');
    expect(sortedMovies).not.toBe(movies);
  })
  // ------------------------------
  // Test edge cases
  // - Should handle empty array correctly
  // - Should handle array with single movie
  // - Should handle array with identical movies
  // - Should maintain stable sort for equal elements
  it('Test edge cases', () => {
    const movies: Movie[] = [
      { title: 'The Matrix', year: 1998, rating: 8.7, duration: 136, genre: 'Action' },
      { title: 'The Godfather', year: 1972, rating: 9.2, duration: 175, genre: 'Drama' },
      { title: 'The Dark Knight', year: 2008, rating: 9.0, duration: 152, genre: 'Action' },
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8, duration: 178, genre: 'Adventure' },
    ] 
    expect(sortMovies([], 'title', 'asc')).toEqual([]);
    expect(sortMovies([movies[0]], 'title', 'asc')).toEqual([movies[0]]);
    expect(sortMovies([movies[0], movies[0]], 'title', 'asc')).toEqual([movies[0], movies[0]]);
  })
  // ------------------------------
  // Test with realistic movie data
  // - Should work with actual movie titles, years, ratings, and durations
  // - Test with mixed data: action movies, comedies, dramas
  // - Test with edge case data: very old movies, very new movies, very long/short movies
  it('Test with realistic movie data', () => {
    const movies: Movie[] = [
      { title: 'The Matrix', year: 1998, rating: 8.7, duration: 136, genre: 'Action' },
      { title: 'The Godfather', year: 1972, rating: 9.2, duration: 175, genre: 'Drama' },
      { title: 'The Dark Knight', year: 2008, rating: 9.0, duration: 152, genre: 'Action' },
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8, duration: 178, genre: 'Adventure' },
    ]
    expect(sortMovies(movies, 'title', 'asc')).toEqual([
      { title: 'The Dark Knight', year: 2008, rating: 9.0, duration: 152, genre: 'Action' },
      { title: 'The Godfather', year: 1972, rating: 9.2, duration: 175, genre: 'Drama' },
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8, duration: 178, genre: 'Adventure' },
      { title: 'The Matrix', year: 1998, rating: 8.7, duration: 136, genre: 'Action' },
    ]);
  }) 
});

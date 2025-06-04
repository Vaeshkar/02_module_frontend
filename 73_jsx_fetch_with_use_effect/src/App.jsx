import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCharacters = (url) => {
  setLoading(true);
  setError(null);
  fetch(url)
    .then(response => response.json())
    .then(data => {
      setCharacters(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);

      const parsedUrl = new URL(url);
      const page = parsedUrl.searchParams.get("page") || 1;
      setCurrentPage(Number(page));
    })
    .catch(error => {
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });
};

useEffect(() => {
  fetchCharacters('https://swapi.tech/api/people');
}, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <h3>Star Wars Characters – API Fetch with Pagination</h3>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-6">
        {characters.map(character => (
          <li
            key={character.url}
            className="bg-white text-gray-800 p-4 rounded shadow text-center hover:shadow-lg transition-shadow font-semibold capitalize"
          >
            {character.name}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => fetchCharacters(prevUrl)} disabled={!prevUrl}>
          Previous
        </button>
        <button onClick={() => fetchCharacters(nextUrl)} disabled={!nextUrl}>
          Next
        </button>
      </div>
      <p>Page: {currentPage}</p>
    </>
  )
}

export default App

// This function fetches a list of Pokémon from the PokeAPI and returns it.
export async function pokemonListLoader() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
  if (!res.ok) throw new Error('Failed to fetch Pokémon list');
  const list = await res.json();

  // Fetch detailed data (including sprites) in parallel
  const detailedData = await Promise.all(
    list.results.map(pokemon =>
      fetch(pokemon.url).then(res => res.json())
    )
  );

  return { pokemons: detailedData };
}

export async function pokemonLoader() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/405');
  if (!res.ok) throw new Error('Failed to fetch Pokémon');
  const pokemon = await res.json();

  return { pokemon };
}

export async function postsLoader() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  const posts = await res.json();

  return { posts };
}

export async function postLoader() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  if (!res.ok) throw new Error('Failed to fetch post');
  const post = await res.json();
  
  return { post };
}
import { useLoaderData } from 'react-router';

export default function RenderPokemonList() {
  const { pokemons } = useLoaderData();

  if (!pokemons || pokemons.length === 0) {
    return <p>No Pokémons found.</p>;
  }

  return (
    <>
      <h1 className='text-2xl font-bold mb-6 text-center'>Pokemon List</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="card flex flex-col justify-center items-center bg-base-300 shadow-md p-4">
            <h2 className='font-bold text-xl'>{pokemon.name}</h2>
            <img className='w-24 h-24' src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
        ))}
      </div>
    </>
  );
}
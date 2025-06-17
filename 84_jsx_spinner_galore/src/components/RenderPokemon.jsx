import { useLoaderData } from 'react-router';

export default function Pokemon() {
  const { pokemon } = useLoaderData();

  if (!pokemon) {
    return <p>No Pokémon found.</p>;
  }

  return (
    <>
      <h1 className='text-2xl font-bold mb-6 text-center'>One Pokemon</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
        <div className='card flex flex-col justify-center items-center bg-base-300 shadow-md p-4'>
          <h2 className='font-bold text-xl'>{pokemon.name}</h2>
          <img className='w-24 h-24' src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      </div>
    </>
  );
}

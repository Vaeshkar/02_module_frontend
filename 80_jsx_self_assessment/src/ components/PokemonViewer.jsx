import { useEffect, useState} from 'react';

const PokemonViewer = ({id}) => { // add the `id` prop
  // TODO: Create state for loading, error, and data
  // TODO: If prop id is not a number between 1 and 151, render "Invalid Pokémon ID" and DO NOT fetch data
  // TODO: useEffect to fetch Pokémon data from https://pokeapi.co/api/v2/pokemon/{id}
  // TODO: Show loading indicator initially and while fetching
  // TODO: Show error message if fetch failed
  // TODO: Show Pokémon name and image sprites.front_default when data is fetched successfully

  //! Updated version
  // TODO: Create state variables: one for loading, one for error, and one for fetched data
  // TODO: If the given `id` is not a number between 1 and 151, return <p>Invalid Pokémon ID</p> and skip fetching
  // TODO: Use useEffect to fetch data from https://pokeapi.co/api/v2/pokemon/{id} whenever `id` changes
  // TODO: Before starting the fetch, set loading to true and error to false
  // TODO: If the fetch fails, show <p>Failed to fetch Pokémon</p>
  // TODO: If the fetch succeeds, show the Pokémon name and its image (sprites.front_default)

  // Initialize component state: loading, error and data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState();
  
  // check if the ID is a number and in range of 1 to 151
  const invalidId = (id) => typeof id !== 'number' || id < 1 || id > 151;

  //* Add useEffect
  useEffect(() => {
    // Skip fetching if ID is invalid
    if (invalidId(id)) return;

    // change the useStates
    setLoading(true);
    setError(false);
    
    // Fetch the Pokemon data
    const fetchData = async () => {
      // inside a try/catch
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!res.ok) throw new Error('fail') /* from the PokemonViewer.text.jsx */
        const pokemon = await res.json();
        // add a sleep to let the test see the 'loading...' state. Got an Error here.
        await new Promise(res => setTimeout(res, 5));
        // set the state data
        setData({
          // build an object to be re-used in the return render
          name: pokemon.name,
          image: pokemon.sprites.front_default,
        });
      } catch {
        // catch the error and set the `setErrror` state to 'true'
        setError(true);
      } finally {
        // if all is done, change the `setLoading` state to 'false'
        setLoading(false);
      }
    };
    // run the fetch funtion inside the useEffect
    fetchData();
    // re-run `useEffect` on ID change
  }, [id]);

  // Show invalid Pokemon message
  if (invalidId(id)) {
    return <p>Invalid Pokémon ID</p>;
  }
  // Show loading message while fetching
  if (loading) {
    return <p>Loading...</p>;
  }
  // Show error message
  if (error) {
    return <p>Failed to fetch Pokémon</p>;
  }

  // Return one single div container
  return (
    <div className='container flex flex-col justify-center items-center mx-auto gap-2'>
      <div className='image w-full h-full object-contain'>
        {/* conditional render. If `image` in data exists render img tag */}
        {data?.image && <img src={data.image} alt={data.name} />}
      </div>
      {/* conditional render: if `name` in data exists render name */}
      <div className='name text-lg font-bold text-black'>{data?.name}</div>
    </div>
  );
};

export default PokemonViewer;

import { Suspense } from 'react';
import { Loading } from '../components';
import RenderPokemonList from '../components/RenderPokemonList';

export default function PokemonList() {
  return (
    <Suspense fallback={<Loading />}>
      <RenderPokemonList />
    </Suspense>
  );
}

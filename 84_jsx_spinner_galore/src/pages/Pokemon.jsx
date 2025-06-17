import { Suspense } from 'react';
import { Loading } from '../components';
import RenderPokemon from '../components/RenderPokemon';

export default function Pokemon() {
  return (
    <Suspense fallback={<Loading />}>
      <RenderPokemon />
    </Suspense>
  );
}

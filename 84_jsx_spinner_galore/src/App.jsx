import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { MainLayout } from './layouts';
import { Home, NotFound, Pokemon, PokemonList, Post, Posts } from './pages';
import { ErrorElement, Loading } from './components';
import { pokemonLoader, pokemonListLoader, postLoader, postsLoader } from './data';

// Import necessary components and pages
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        {/* Homepage */}
        <Route index element={<Home />} />

        {/* Pokemon routes */}
        <Route path="pokemonList" element={<PokemonList />} loader={pokemonListLoader} errorElement={<ErrorElement />} hydrateFallbackElement={<Loading />} />
        <Route path="pokemon" element={<Pokemon />} loader={pokemonLoader} errorElement={<ErrorElement />} hydrateFallbackElement={<Loading />} />

        {/* Post routes */}
        <Route path="posts" element={<Posts />} loader={postsLoader} errorElement={<ErrorElement />} hydrateFallbackElement={<Loading />} />
        <Route path="post" element={<Post />} loader={postLoader} errorElement={<ErrorElement />} hydrateFallbackElement={<Loading />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;

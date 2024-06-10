import { createBrowserRouter } from 'react-router-dom';
import { PokePlays } from './views/PokePlays';
import { Layout } from './layouts/Layout';
import { FavoritePokemons } from './views/FavoritePokemons';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <PokePlays></PokePlays>,
      },
      {
        path: 'Favorites/Games',
        element: <FavoritePokemons></FavoritePokemons>,
      },
    ],
  },
]);

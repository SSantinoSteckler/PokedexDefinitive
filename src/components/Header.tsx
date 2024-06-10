import { Link } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';

export const Header = () => {
  const favorite = useAppStore((state) => state.favorite);
  return (
    <header className='bg-black w-full text-white flex flex-row justify-between p-9 items-center py-12 flex-wrap gap-4'>
      <div className='flex items-center flex-row gap-4'>
        <h2 className='text-5xl font-extrabold text-red-600'>Pokedex</h2>
        <img src='juego.png' alt='pokebola' className='max-w-[70px]' />
      </div>
      <div>
        <ul className='flex gap-8 text-2xl font-bold text-red-600'>
          <li className='hover:text-white transition-all'>
            <Link to={'/'}>Buscar</Link>
          </li>
          <li>
            <Link
              className='hover:text-white transition-all'
              to={'Favorites/Games'}
            >
              Favoritos
            </Link>
            <span className='ml-3 bg-yellow-400 rounded-full p-1 px-2 font-extrabold cursor-pointer'>
              {favorite.length}
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
};

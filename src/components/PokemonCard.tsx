import { useAppStore } from '../stores/useAppStore';
import { Pokemons } from '../types';

export const PokemonCard = ({ elem }: { elem: Pokemons }) => {
  const fetchPokemonUrl = useAppStore((elem) => elem.fetchPokemonUrl);

  const handleClick = () => {
    fetchPokemonUrl(elem.pokemon.url);
  };

  return (
    <div
      className='bg-white p-3 rounded-md cursor-pointer hover:bg-yellow-400 transition-all text-center font-bold uppercase'
      onClick={handleClick}
    >
      <h2 className='text-[14px] flex items-center justify-center gap-2'>
        {elem.pokemon.name}
        <img src='pokemon.png' alt='' className='w-11' />
      </h2>
    </div>
  );
};

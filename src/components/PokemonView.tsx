import { useAppStore } from '../stores/useAppStore';
import { PokemonCard } from './PokemonCard';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export const PokemonView = () => {
  const selectedPokemon = useAppStore((state) => state.selectPokemon);
  const pokemons = useAppStore((state) => state.pokemons);
  const handleClickFavorite = useAppStore((state) => state.handleClickFavorite);
  const favorite = useAppStore((elem) => elem.favorite);

  const handleClickAlertFavorite = () => {
    if (favorite.some((elem) => elem.id === selectedPokemon.id)) {
      Toastify({
        text: 'El pokemon ya existe en favoritos',
        className: 'info',
        style: {
          background: 'white',
          color: 'black',
          border: '6px solid red',
          fontSize: '20px',
          padding: '20px',
          width: '500px',
        },

        duration: 1000,
        position: 'left',
      }).showToast();
    } else {
      handleClickFavorite(selectedPokemon);
      Toastify({
        text: 'Pokemon agregado a favoritos!',
        className: 'info',
        style: {
          background: 'white',
          color: 'black',
          border: '6px solid red',
          fontSize: '20px',
          padding: '20px',
          width: '500px',
        },
        duration: 1000,
        position: 'left',
      }).showToast();
    }
  };

  return (
    <>
      <section className='min-h-screen flex flex-col w-[2000px]  lg:flex-row'>
        <div className='w-full lg:w-[75%] bg-blue-400 p-5 flex justify-center'>
          <div className='w-full bg-white bg-ash bg-no-repeat bg-cover bg-center border-4 border-black flex justify-center items-center flex-col rounded-xl gap-5 p-3 text-center'>
            {pokemons && selectedPokemon ? (
              <>
                <h2 className='font-extrabold uppercase text-6xl text-yellow-400'>
                  {selectedPokemon.name}
                </h2>
                {selectedPokemon.sprites &&
                  selectedPokemon.sprites.front_default && (
                    <img
                      src={selectedPokemon.sprites.front_default}
                      alt={selectedPokemon.name}
                      className='max-w-[700px] w-full bg-white rounded-full p-6 border-8 border-black shadow-2xl'
                    />
                  )}
                <button
                  onClick={handleClickAlertFavorite}
                  className='text-2xl font-bold bg-red-700 p-5 rounded-2xl text-white shadow-xl hover:bg-red-300  w-[70%] border-4 transition-all'
                >
                  Agregar A Favoritos
                </button>
              </>
            ) : (
              <p className='text-5xl font-extrabold'>Seleccione un pókemon</p>
            )}
          </div>
        </div>
        <div className=' bg-red-600 grid xl:grid-cols-3 grid-cols-2s 2xl:grid-cols-4 gap-5 p-4 overflow-y-scroll h-screen'>
          {pokemons &&
            pokemons.map((elem) => (
              <PokemonCard key={elem.pokemon.name} elem={elem} />
            ))}
        </div>
      </section>
    </>
  );
};

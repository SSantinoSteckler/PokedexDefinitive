import { useAppStore } from '../stores/useAppStore';
import { SelectedPokemon } from '../types';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

type ElemFavoriteType = {
  elem: SelectedPokemon;
};

export const PokemonFavoriteCard = ({ elem }: ElemFavoriteType) => {
  const deleteClickFavorite = useAppStore((state) => state.deleteClickFavorite);

  const handleClickDeleteFavorite = () => {
    deleteClickFavorite(elem);
    Toastify({
      text: 'Pokemon Eliminado De Favoritos!',
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
  };

  return (
    <div className='bg-white p-5 w-full text-center rounded-lg flex justify-center flex-col border-4 items-center border-black gap-3'>
      <h2 className='font-extrabold text-3xl uppercase'>{elem.name}</h2>
      {elem.sprites.front_default && (
        <img
          className='w-[80%] bg-red-600 rounded-full border-8 border-black'
          src={elem.sprites.front_default}
          alt='pokemon'
        />
      )}
      <button
        className='bg-red-600 text-white p-5 text-2xl rounded-[20px] hover:bg-red-400 transition all w-[80%] border-4'
        onClick={handleClickDeleteFavorite}
      >
        Eliminar Favorito
      </button>
    </div>
  );
};

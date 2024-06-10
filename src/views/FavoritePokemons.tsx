import { PokemonFavoriteCard } from '../components/PokemonFavoriteCard';
import { useAppStore } from '../stores/useAppStore';

export const FavoritePokemons = () => {
  const favorite = useAppStore((state) => state.favorite);

  return (
    <>
      <section className='bg-blue-400 min-h-screen p-8'>
        {favorite.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 '>
            {favorite.map((elem) => (
              <PokemonFavoriteCard
                key={elem.id}
                elem={elem}
              ></PokemonFavoriteCard>
            ))}
          </div>
        ) : (
          <p className='text-center font-extrabold text-5xl text-black '>
            No hay favoritos
          </p>
        )}
      </section>
    </>
  );
};

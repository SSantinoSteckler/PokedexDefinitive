import { useState, useEffect } from 'react';
import { data } from '../db/db';
import { useAppStore } from '../stores/useAppStore';

export const Aside = () => {
  const fetchPokex = useAppStore((elem) => elem.fetchPokex);
  const fetchPokemon = useAppStore((elem) => elem.fetchPokemon);
  const pokemons = useAppStore((elem) => elem.pokemons);

  const [valueState, setValue] = useState({
    category: 'fire',
    pokemon: 'charmander',
  });

  useEffect(() => {
    if (Object.values(valueState.category).includes('')) {
      return;
    }
    fetchPokex(valueState);

    if (!Object.values(valueState.pokemon).includes('')) {
      fetchPokemon(valueState);
    }
  }, [valueState]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;

    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <aside
      className='bg-white p-5 sh-screen lg:w-[20%] w-full fixed bottom-[-10px] border-t-8 border-black lg:static lg:border-none
      '
    >
      <form>
        <div className='flex flex-col gap-5 text-3xl p-5'>
          <label
            className='font-bold border-l-4 p-2 border-black'
            htmlFor='category'
          >
            Tipos
          </label>
          <select
            className='cursor-pointer p-2 border-2 border-black rounded-lg'
            name='category'
            id='category'
            onChange={handleChange}
            value={valueState.category}
          >
            <option value=''>--Seleccionar una opcion--</option>
            {data.map((elem) => (
              <option value={elem.name} key={elem.name}>
                {elem.name}
              </option>
            ))}
          </select>
        </div>
        <div className='flex flex-col gap-5 text-3xl p-5'>
          <label
            className='font-bold border-l-4 p-2 border-black'
            htmlFor='category'
          >
            Pokemons
          </label>
          <select
            className='cursor-pointer p-2 border-2 border-black rounded-lg'
            name='pokemon'
            id='pokemon'
            value={valueState.pokemon}
            onChange={handleChange}
          >
            <option value=''>--Seleccionar una opcion--</option>
            {pokemons &&
              pokemons.map((elem) => (
                <option value={elem.pokemon.name} key={elem.pokemon.name}>
                  {elem.pokemon.name}
                </option>
              ))}
          </select>
        </div>
      </form>
    </aside>
  );
};

import { StateCreator } from 'zustand';
import { Pokemons, SelectedPokemon } from '../types';
import {
  pokemonApiService,
  pokemonUrlService,
  pokexApiService,
} from '../services/gamesService';

export type PokemonStoreType = {
  pokemons: Pokemons[];
  selectPokemon: SelectedPokemon;
  favorite: SelectedPokemon[];
  fetchPokex: (data: { category: string }) => Promise<void>;
  fetchPokemon: (data: { pokemon: string }) => Promise<void>;
  fetchPokemonUrl: (data: string) => Promise<void>;
  handleClickFavorite: (data: SelectedPokemon) => void;
  deleteClickFavorite: (data: SelectedPokemon) => void;
};

const storageCharge = () => {
  const data = localStorage.getItem('favorites');
  return data ? JSON.parse(data) : [];
};

export const createPokemonStore: StateCreator<PokemonStoreType> = (
  set,
  get
) => ({
  pokemons: [],
  selectPokemon: {} as SelectedPokemon,
  favorite: storageCharge(),
  fetchPokex: async (data) => {
    const result = await pokexApiService(data);

    set({
      pokemons: result,
    });
  },
  fetchPokemon: async (data) => {
    const result = await pokemonApiService(data);
    console.log(result);

    set({
      selectPokemon: result,
    });
  },
  fetchPokemonUrl: async (data) => {
    const result = await pokemonUrlService(data);
    set({
      selectPokemon: result,
    });
  },
  handleClickFavorite: (elem) => {
    const { favorite } = get();
    if (!favorite.some((favorite) => favorite.id === elem.id)) {
      set((state) => {
        const updatedFavorites = [...state.favorite, elem];
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Actualiza localStorage aquí
        return { favorite: updatedFavorites };
      });
    }
  },
  deleteClickFavorite: (elem) => {
    const result = get().favorite.filter((favorite) => favorite.id !== elem.id);
    set({
      favorite: result,
    });
    localStorage.setItem('favorites', JSON.stringify(get().favorite));
  },
});

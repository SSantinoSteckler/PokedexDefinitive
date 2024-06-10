import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { PokemonStoreType } from './pokemonStore';
import { createPokemonStore } from './pokemonStore';

export const useAppStore = create<PokemonStoreType>()(
  devtools((...a) => ({
    ...createPokemonStore(...a),
  }))
);

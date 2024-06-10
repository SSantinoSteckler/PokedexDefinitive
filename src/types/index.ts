import {
  pokemonStoreApiSchema,
  selectedPokemonschema,
} from '../schemas/index-schemas';
import { z } from 'zod';

export type Pokemons = z.infer<typeof pokemonStoreApiSchema>;
export type SelectedPokemon = z.infer<typeof selectedPokemonschema>;

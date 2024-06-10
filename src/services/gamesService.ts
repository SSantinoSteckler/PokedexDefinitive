import axios from 'axios';
import {
  pokemonStoreApiSchemaArray,
  selectedPokemonschema,
} from '../schemas/index-schemas';

export const pokexApiService = async (dataCat: { category: string }) => {
  try {
    const url = `https://pokeapi.co/api/v2/type/${dataCat.category}/`;
    const { data } = await axios(url);
    const result = pokemonStoreApiSchemaArray.safeParse(data.pokemon);

    if (result.success) {
      return result.data;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const pokemonApiService = async (dataName: { pokemon: string }) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${dataName.pokemon}`;
    const { data } = await axios(url);
    const result = selectedPokemonschema.safeParse(data);
    if (result.success) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const pokemonUrlService = async (dataUrl: string) => {
  try {
    const url = `${dataUrl}`;
    const { data } = await axios(url);
    const result = selectedPokemonschema.safeParse(data);
    if (result.success) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
  }
};

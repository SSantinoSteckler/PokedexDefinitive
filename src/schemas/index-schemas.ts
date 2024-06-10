import { z } from 'zod';

export const pokemonStoreApiSchema = z.object({
  pokemon: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
});

export const pokemonStoreApiSchemaArray = z.array(pokemonStoreApiSchema);

const crySchema = z.object({
  latest: z.string().url(),
  legacy: z.string().url(),
});

const abilitySchema = z.object({
  ability: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
  is_hidden: z.boolean(),
  slot: z.number(),
});

const formSchema = z.object({
  name: z.string(),
  url: z.string().url(),
});

const gameIndexSchema = z.object({
  game_index: z.number(),
  version: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
});

const heldItemSchema = z.object({
  item: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
});

const moveSchema = z.object({
  move: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
});

const speciesSchema = z.object({
  name: z.string(),
  url: z.string().url(),
});

const spriteSchema = z.object({
  back_default: z.string().nullable(),
  back_female: z.string().nullable(),
  back_shiny: z.string().nullable(),
  back_shiny_female: z.string().nullable(),
  front_default: z.string().nullable(),
  front_female: z.string().nullable(),
  front_shiny: z.string().nullable(),
  front_shiny_female: z.string().nullable(),
});

const statSchema = z.object({
  base_stat: z.number(),
  effort: z.number(),
  stat: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
});

const typeSchema = z.object({
  slot: z.number(),
  type: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
});

export const selectedPokemonschema = z.object({
  abilities: z.array(abilitySchema),
  base_experience: z.number(),
  cries: crySchema,
  forms: z.array(formSchema),
  game_indices: z.array(gameIndexSchema),
  height: z.number(),
  held_items: z.array(heldItemSchema),
  id: z.number(),
  is_default: z.boolean(),
  location_area_encounters: z.string().url(),
  moves: z.array(moveSchema),
  name: z.string(),
  order: z.number(),
  past_abilities: z.array(z.any()),
  past_types: z.array(z.any()),
  species: speciesSchema,
  sprites: spriteSchema,
  stats: z.array(statSchema),
  types: z.array(typeSchema),
  weight: z.number(),
});

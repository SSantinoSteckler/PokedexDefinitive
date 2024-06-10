import { Aside } from '../components/Aside';
import { PokemonView } from '../components/PokemonView';

export const PokePlays = () => {
  return (
    <section className=' bg-slate-400 min-h-[100vh] flex flex-row'>
      <Aside></Aside>
      <PokemonView></PokemonView>
    </section>
  );
};

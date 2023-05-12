type Pokemon = {
  name: string;
  imageSrc: string;
};
const AVAILABLE_POKEMONS: Pokemon[] = [
  {
    name: 'pikachu',
    imageSrc: 'assets/pokemon_cards/pikachu.png',
  },
  {
    name: 'carapuce',
    imageSrc: 'assets/pokemon_cards/carapuce.png',
  },
  {
    name: 'salameche',
    imageSrc: 'assets/pokemon_cards/salameche.png',
  },
];
export { AVAILABLE_POKEMONS, Pokemon };

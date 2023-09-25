import Pokecard from "./Pokecard";

function Pokedex({ pokemons }) {
  return pokemons.map(pokemon => <Pokecard id={pokemon.id} name={pokemon.name}
    type={pokemon.type} base_experience={pokemon.base_experience} />)
}

export default Pokedex;
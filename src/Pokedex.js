import Pokecard from "./Pokecard";
import styles from "./Pokedex.css";

function Pokedex({ pokemons }) {
  return (
    <div className="Pokedex">
      {pokemons.map(pokemon => <Pokecard
        id={pokemon.id}
        name={pokemon.name}
        type={pokemon.type}
        base_experience={pokemon.base_experience} />)}
    </div>
  );
}

export default Pokedex;
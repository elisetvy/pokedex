import Pokecard from "./Pokecard";
import styles from "./Pokedex.css";

/** Takes in pokemons array.
 *
 * Returns div element containing a Pokecard for each pokemon in array.
 *
 * Passes to App.
 */

function Pokedex({ pokemons, isWinner }) {
  return (
    <div className="Pokedex">
      {pokemons.map(pokemon => <Pokecard
        id={pokemon.id}
        name={pokemon.name}
        type={pokemon.type}
        base_experience={pokemon.base_experience} />)}
        <br></br>
      <b>{ isWinner ? "THIS HAND WINS" : null }</b>
    </div>
  );
}

export default Pokedex;
import "./Pokecard.css"

const POKEMON_IMG_BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

/** Takes in id, name, type, base_experience.
 *
 * Returns div element.
 *
 * Passes to Pokedex.
 */

function Pokecard({id, name, type, base_experience}) {
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-name">{name}</h1>
      <img src={`${POKEMON_IMG_BASE_URL}${id}.png`} alt="pokemon" />
      <p><b>Type:</b> {`${type}`}</p>
      <p><b>EXP:</b> {`${base_experience}`}</p>
    </div>
  )
}

export default Pokecard;
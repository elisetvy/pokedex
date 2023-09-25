const POKEMON_IMG_BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

function Pokecard({id, name, type, base_experience}) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={`${POKEMON_IMG_BASE_URL}${id}.png`} alt="pokemon" />
      <p>Type: {`${type}`}</p>
      <p>EXP: {`${base_experience}`}</p>
    </div>
  )
}

export default Pokecard;
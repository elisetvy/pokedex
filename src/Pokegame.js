import _ from "lodash";
import Pokedex from "./Pokedex"

function Pokegame({ pokemons }) {
  const shuffled = _.shuffle(pokemons);
  const handOne = shuffled.slice(0,4);
  const handTwo = shuffled.slice(4);
  const handOneXP = _.sum(handOne.map(pokemon => pokemon.base_experience));
  const handTwoXP = _.sum(handTwo.map(pokemon => pokemon.base_experience));

  return (
    <div>
    <Pokedex pokemons={handOne} isWinner={handOneXP > handTwoXP} />
    <Pokedex pokemons={handTwo} isWinner={handTwoXP > handOneXP}/>
    </div>
  )
}

export default Pokegame;
import { usePokemonWithOutEvolution } from '../../Utils/Hooks/usePokemonWithOutEvolution'
import { usePokemonWithMinWeight } from '../../Utils/Hooks/sePokemonWithMinWeight'

import { Container, PokeCard, PokeContent, PokeTitle } from './CardStyle.js'

const Card = () => {
  const pokemonList = usePokemonWithOutEvolution()
  const minWeightPokemon = usePokemonWithMinWeight(pokemonList)

  return (
    <Container>
      <PokeContent>
        <PokeTitle>Nombre del Pokemon con menos peso:</PokeTitle>
        <PokeCard>
          <p>{minWeightPokemon}</p>
        </PokeCard>
      </PokeContent>

      <PokeContent>
        <PokeTitle>Pokemon existentes que no tienen evolución</PokeTitle>
        {pokemonList.length > 0 ? (
          pokemonList.map((pokemonName) => (
            <PokeCard key={pokemonName}>
              <p>{pokemonName}</p>
            </PokeCard>
          ))
        ) : (
          <PokeTitle>Loading...</PokeTitle>
        )}
      </PokeContent>
    </Container>
  )
}

export default Card

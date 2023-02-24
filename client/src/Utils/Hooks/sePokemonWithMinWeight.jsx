import { useEffect, useState } from 'react'

export function usePokemonWithMinWeight(pokemonList) {
  const [minWeightPokemon, setMinWeightPokemon] = useState(null)

  useEffect(() => {
    async function getPokemonWithMinWeight(pokemonList) {
      let minWeight = Infinity
      let minWeightPokemonName = null

      await Promise.all(
        pokemonList.map(async (pokemonName) => {
          try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

            if (!response.ok) {
              throw new Error(`Pokemon ${pokemonName} not found`)
            }
            const data = await response.json()

            if (data.weight < minWeight) {
              minWeight = data.weight
              minWeightPokemonName = data.name
            }
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error(`Error fetching pokemon ${pokemonName}: ${error.message}`)
          }
        }),
      )

      setMinWeightPokemon(minWeightPokemonName)
    }

    if (pokemonList.length > 0) {
      getPokemonWithMinWeight(pokemonList)
    }
  }, [pokemonList])

  return minWeightPokemon
}

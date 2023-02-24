import { useState, useEffect } from 'react'

import { getLastEvolvedPokemonName } from '../functions/getLastEvolvedPokemonName.js'

// Hook personalizado que devuelve una lista de los nombres de los pokemones que no tienen evolución
export function usePokemonWithOutEvolution() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    async function fetchLastEvolvedPokemon() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=1279')
      const data = await response.json()
      const pokemonSpecies = data.results

      const pokemonWithLastEvolutions = await Promise.all(
        pokemonSpecies.map(async (pokemonSpecie) => {
          const pokemonSpecieResponse = await fetch(pokemonSpecie.url)
          const pokemonSpecieData = await pokemonSpecieResponse.json()

          // Si la especie de pokemon actual tiene una cadena de evolución definida
          // Obtenemos el nombre del último pokemon evolucionado en la cadena de evolución
          if (pokemonSpecieData.evolution_chain !== null) {
            const lastEvolvedPokemonName = await getLastEvolvedPokemonName(
              pokemonSpecieData.evolution_chain.url,
            )

            return lastEvolvedPokemonName
          }

          // Si la especie de pokemon actual no tiene cadena de evolución definida, devolvemos null
          return null
        }),
      )
      // creamos un nuevo array con los nombres de los pokemones que no tienen evolución
      const uniquePokemonList = Array.from(new Set(pokemonWithLastEvolutions)).filter(
        (pokemonName) => pokemonName !== null,
      )

      setPokemonList(uniquePokemonList)
    }

    fetchLastEvolvedPokemon()
  }, [])

  return pokemonList
}

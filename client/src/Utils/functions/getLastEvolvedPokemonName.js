export const getLastEvolvedPokemonName = async (evolutionChainUrl) => {
  const evolutionChainResponse = await fetch(evolutionChainUrl)
  const evolutionChainData = await evolutionChainResponse.json()

  // función recursiva para obtener el último pokemon evolucionado
  function getLastPokemon(chain) {
    if (!chain.evolves_to.length) {
      return chain.species.name
    }

    return getLastPokemon(chain.evolves_to[0])
  }

  return getLastPokemon(evolutionChainData.chain)
}

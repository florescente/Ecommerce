import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { Pokemon } from '../models/Pokemons'

@Resolver()
export class PokemonResolver {
  private data: Pokemon[] = []

  @Query(() => [Pokemon])
  async pokemon() {
    return this.data
  }

  @Mutation(() => Pokemon)
  async createPokemon(@Arg('name') name: string) {
    const pokemon = { id: '1', name }
    this.data.push(pokemon)
    return pokemon
  }
}

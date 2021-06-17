<template>
  <div id="app">
    <div class="container">
      <h1>Search Pokemon</h1>
      <input class="input" v-model="searchQuery" @keyup.enter="search"/>
      <button class="add-button" v-on:click="search">Søk</button>
    </div>
    <div>
      <h3>{{ pokemon.name }}</h3>
      <img :src="pokemon.art">
      <p> {{"ID: " + pokemon.id }}</p>
      <p> {{"Height: " + pokemon.height }}</p>
      <p> {{"Weight: " + pokemon.weight }}</p>
      <p> {{"Weight: " + pokemon.weight }}</p>
    </div>
  </div>
</template>

<script>
import pokeAPI from '../pokeAPI';

export default {
  name: 'App',
  data(){
    return {
      searchQuery: '',
      pokemon: []
    }
  },
  methods: {
    async search(){
      this.pokemon = await pokeAPI.getBasicPokemonInfo(this.searchQuery)
      this.searchQuery= ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
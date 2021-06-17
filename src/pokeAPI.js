import axios from 'axios';
const URL = "https://pokeapi.co/api/v2/"

export default class pokeAPI {
    static async getBasicPokemonInfo(input) {
    var res = await axios.get(URL + 'pokemon/' + input);
    //delete res.data.forms
    let officialArtWork = res.data.sprites.other['official-artwork']['front_default']
    const rest = {
        height: res.data.height,
        name: res.data.name,
        id: res.data.id,
        weight: res.data.weight,
        art: officialArtWork
    }
    return rest;
  }

}
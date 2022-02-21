import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon : any;
  pokemonType : any;
  pokemonImg : any;

  constructor(private pokedexService : PokedexService, private acr : ActivatedRoute) { }

  ngOnInit(): void {
    this.acr.params.subscribe(
      params => {
        this.getPokemon(params['id'])
      }
    );
  }

  getPokemon(id : number){
    this.pokedexService.getAllPokemons(id).subscribe(
      (res : any)  => {
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].type.name;
      });
    }

}

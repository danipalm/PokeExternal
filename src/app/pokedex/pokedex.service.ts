import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http : HttpClient) { }


  getAllPokemons(indice : number)
  {
    let url = `https://pokeapi.co/api/v2/pokemon/${indice}`;
    return this.http.get<any>(url);
  }
}

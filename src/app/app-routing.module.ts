import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PokedexListComponent } from './pokedex/pokedex-list/pokedex-list.component';
import { PokemonDetailComponent } from './pokedex/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'pokedex', pathMatch: 'full'},
  { path:'pokedex', component : PokedexListComponent},
  { path : 'pokedex/detalle/:id', component: PokemonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

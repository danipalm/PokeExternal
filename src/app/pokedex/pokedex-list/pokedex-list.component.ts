import { Component, OnInit, ViewChild } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss']
})
export class PokedexListComponent implements OnInit {

  displayedColumns : string[] = ['id', 'sprites', 'name'];
  data : any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  pokemons = [];

  @ViewChild(MatPaginator, {static: true}) paginator : MatPaginator | any;

  constructor(private pokedexService : PokedexService ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  applyFilter() {
    const filterValue = (event?.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

  getPokemons ()
  {
    let pokemonData;

    for (let i = 1; i <= 150; i++)
    this.pokedexService.getAllPokemons(i).subscribe(
      (res : any)  => {
        pokemonData = {
          id: i,
          sprites : res.sprites.front_default,
          name : res.name
        };
        this.data.push(pokemonData);
        this.dataSource = new MatTableDataSource<any>(this.data);
        this.dataSource.paginator = this.paginator;
      },
      (err : any) => { console.log(err);}
    );
  }

}

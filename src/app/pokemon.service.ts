import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/pokemon';

  //Reactive state
  pokemonList = signal<any[]>([]);
  
  //Method used for saving data
  savePokemon(data : any){
    return this.http.post(this.apiUrl, data);
  }
  
  //Method used for fetching data
  fetchPokemon(){
    this.http.get<any[]>(this.apiUrl).subscribe(data => this.pokemonList.set(data));
  }
}

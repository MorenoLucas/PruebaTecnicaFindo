import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../interface/episode';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiServService {
  private url: string = environment.url;
  episode: any;
  characters: any = [];
  personaje: any;
  showButton = false;

  constructor(private http: HttpClient) {}
  // Obtengo los episodios
  getEpisodes(): Observable<Episode> {
    return this.http.get<Episode>(this.url);
  }
  //obtengo url del episodio selecionado
  setEpisode(url: string) {
    this.episode = this.http.get(url);
  }
  //muestro episodio
  getEpisode(): Observable<Episode> {
    return this.episode;
  }
  //obtenemos los personajes del episodio seleccionado
  getCharacter() {
    this.characters = [];
    this.getEpisode().subscribe((item) => {
      item.characters.forEach((i) =>
        this.http.get(i).subscribe((pers) => {
          this.personaje = pers;
          const per = this.personaje.name;
          this.characters.push(per);
        })
      );
    });
    return this.characters;
  }
  //devolvemos la nueva pagina para agregar mas episodios
  getEpisodesByPage(page: number): any {
    return this.http.get<Episode>(this.url + '?page=' + page);
  }
}

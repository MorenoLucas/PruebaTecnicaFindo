import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../interface/episode';

@Injectable({
  providedIn: 'root',
})
export class ApiServService {
  private url: string = 'https://rickandmortyapi.com/api/episode';
  episode: any;
  characters: any = [];
  personaje: any;
  showButton = false;

  constructor(private http: HttpClient) {}

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
  getCharacter() {
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
  getEpisodesByPage(page: number): any {
    return this.http.get<Episode>(this.url + '?page=' + page);
  }
}

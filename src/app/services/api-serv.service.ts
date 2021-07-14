import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../interface/episode';

@Injectable({
  providedIn: 'root',
})
export class ApiServService {
  private url: string = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) {}

  getEpisodes(): Observable<Episode> {
    return this.http.get<Episode>(this.url);
  }
}

import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Episode } from 'src/app/interface/episode';
import { ApiServService } from 'src/app/services/api-serv.service';

@Component({
  selector: 'app-list-espisode',
  templateUrl: './list-espisode.component.html',
  styleUrls: ['./list-espisode.component.css'],
})
export class ListEspisodeComponent implements OnInit {
  episodes: Episode[] = [];
  characters: any;
  showButton = false;
  pagNum: number = 2;
  constructor(private apiService: ApiServService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getEpisodes().subscribe((item: any) => {
      this.episodes = item.results;
    });
  }
  //vamos al episodio seleccionado
  goEpisode(i: string, nomb: string) {
    this.apiService.setEpisode(i);
    this.router.navigate(['details', nomb]);
  }
  //escuchanmo la ventana para hacer aparecer el botton de ir arriba
  @HostListener('window:scroll' || 'container:scroll')
  onScroll(): void {
    const yOffset = window.pageYOffset;
    const scrollTop = document.documentElement.scrollTop;
    this.showButton = (yOffset || scrollTop) > 50;
  }
  //volvemos arriba de la pagina
  onScrollTop(): void {
    document.documentElement.scrollTop = 0;
  }
  //pasamos el numero de pagina en el que estamos y concatenemos los nuevos episodios
  onScrollDown(): void {
    if (this.pagNum <= 3) {
      this.apiService.getEpisodesByPage(this.pagNum).subscribe((item: any) => {
        this.episodes = this.episodes.concat(item.results);
      });
      this.pagNum++;
    }
  }
}

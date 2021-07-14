import { Component, OnInit } from '@angular/core';
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
  constructor(private apiService: ApiServService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getEpisodes().subscribe((item: any) => {
      this.episodes = item.results;
    });
  }
  goEpisode(i, nomb) {
    this.apiService.setEpisode(i);
    this.router.navigate(['details', nomb]);
  }
}

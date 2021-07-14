import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/interface/episode';
import { ApiServService } from 'src/app/services/api-serv.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  episode: Episode;
  characters: string[] = [];
  constructor(private apiServcice: ApiServService) {
    this.episode = {
      name: '',
      id: 0,
      air_date: '',
      episode: '',
      characters: [],
      url: '',
      created: '',
    };
  }

  ngOnInit(): void {
    this.apiServcice.getEpisode().subscribe((epi: Episode) => {
      this.episode = epi;
    });
    this.characters = this.apiServcice.getCharacter();
  }
}

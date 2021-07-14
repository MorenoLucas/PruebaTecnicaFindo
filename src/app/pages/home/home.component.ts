import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showButton = false;
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    const yOffset = window.pageYOffset;
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    this.showButton = (yOffset || scrollTop) > 500;
  }
  onScrollTop(): void {
    document.documentElement.scrollTop = 0;
  }
}

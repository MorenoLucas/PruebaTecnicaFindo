import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  mostrar: any;
  x: Boolean = true;
  constructor() {}

  ngOnInit(): void {}
  most() {
    if (this.x) {
      this.mostrar = true;
      this.x = false;
    } else {
      this.mostrar = false;
      this.x = true;
      window.location.reload();
    }
  }
}

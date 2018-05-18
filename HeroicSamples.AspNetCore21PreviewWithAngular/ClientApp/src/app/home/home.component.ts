import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  version: string;

  constructor() {
    this.version = VERSION.full;
  }
}

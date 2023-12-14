import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public devName: string = 'April John Maraat';

  constructor() {}

  title = 'Money Description';
}
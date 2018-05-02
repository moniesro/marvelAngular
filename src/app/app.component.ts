import { Component } from '@angular/core';
import { MarvelService } from "./services/marvel.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marvel';
}

import { Component } from '@angular/core';
import { MarvelService } from "./services/marvel.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marvel';

 /* currentPage: number = 1;

  characters: Array<any> = [];

  scrollCallback;

  constructor(private marvelService: MarvelService){
    this.scrollCallback = this.getCharacters.bind(this);
  }

  getCharacters(){
   // return this.marvelService.getPagesCharacters(this.currentPage).do(this.processData);
  }

  private processData = (characters) => {
    this.currentPage++;
    this.characters = this.characters.concat(characters.json())
  }
*/
}

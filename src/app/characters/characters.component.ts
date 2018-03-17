import { Component, OnInit } from '@angular/core';
import {MarvelService} from '../services/marvel.service';
import {Character} from '../model/Character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[];
  attributionText: string;

  modalShow: boolean;
  modalData: object;


  constructor(private marvelService: MarvelService) {
    this.characters = [];
  }

  ngOnInit() {

     this.marvelService.getCharacters().subscribe( response => {
       console.log('subscribe');
       console.log(response.attributionText);
       console.log(response.data.total);
       this.attributionText = response.attributionText;
       this.characters = response.data.results;
       console.log('numero: ' +this.characters.length);
     });
  }

  show(character:object) {
    console.log('shooow');
    this.modalShow = true;
    console.log(character);
    this.modalData = character;
  };

  onCloseClick = (e) => {
    console.log('onCloseclick');
    this.modalShow = false;
  }

}

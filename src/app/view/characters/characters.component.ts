import { Component, OnInit } from '@angular/core';
import {MarvelService} from '../../services/marvel.service';
import {Character} from '../../model/Character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  //Attributes concerned of Marvel Response
  characters: Character[];
  limit: number;
  offset: number;
  attributionText: string;

  //Attributes of modal
  modalShow: boolean;
  modalData: object;


  constructor(private marvelService: MarvelService) {
    this.characters = [];
    this.limit = 22;
    this.offset = 100;
  }

  ngOnInit() {
     this.marvelService.getCharacters(this.limit, this.offset).subscribe( response => {
       this.attributionText = response.attributionText;
       this.characters = response.data.results;
     });
  }

  /*
    Event of modal show
   */
  show(character:object) {
    console.log('Show()');
    this.modalShow = true;
    console.log(character);
    this.modalData = character;
  };

  /*
    Close Modal
   */
  onCloseClick = (e) => {
    console.log('Close()');
    this.modalShow = false;
  }

}

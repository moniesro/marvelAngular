import { Component, OnInit } from '@angular/core';
import {MarvelService} from '../../services/marvel.service';
import {Character} from '../../model/Character';

import 'rxjs/add/operator/do';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit{

  //Attributes concerned of Marvel Response
  characters: Character[];
  attributionText: string;
  total: number;

  //Attributes concerned of API call
  limit: number = 100;
  offset: number = 100;
  totalCount: number;  //number of times ->event scroll

  //Attributes of modal
  modalShow: boolean;
  modalData: object;

  //Attributes of loader
  loading: boolean;

  constructor(private marvelService: MarvelService) {
    this.characters = [];
    this.totalCount = this.offset;
  }

  ngOnInit() {
    //this.loading = true;
    this.getCharacters(this.offset);
  }

  /*
    Listener of Scroll action on window.
    Each time when there is a event, we call to Marvel API
   */
  onScroll(){
    console.log('scrolled!!');
    this.getCharacters(this.offset);
  }

  getCharacters(offset:number) {

    this.loading = true; //Loader icon show

    if(this.totalCount === this.total )
    {
      this.loading = false;
      return;
    }

    this.marvelService
      .getCharacters(this.limit, offset)
        .subscribe( response => {

          this.attributionText = response.attributionText;  //Copyright MarvelAPI
          this.total = response.data.total;

          let lastCharacter: any;

          if(this.characters.length !=0)
          { lastCharacter = this.characters[this.characters.length-1]; } //Take the last Character of call

          let newCharacters = [] = response.data.results;
          let isCharacterFound = false;

          if(lastCharacter != undefined && lastCharacter.id === newCharacters[newCharacters.length - 1].id)
          { isCharacterFound = true; }  // The new call returns the same characters

          if(!isCharacterFound)
          {
            this.characters = this.characters.concat(newCharacters);
            this.offset += response.data.count;
            this.totalCount += response.data.count;
          }

          console.log(this.characters[this.characters.length - 1]);
          console.log(this.characters.length);
          this.loading = false; //Loader icon unshow
        });
  }

  /*
    Event of modal show
   */
  show(character:object) {
    console.log('Show()');
    this.modalShow = true;
    //console.log(character);
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

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MarvelResponse } from '../model/MarvelResponse';
import {Character} from '../model/Character';
import {Observable} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class MarvelService {

  private _marvelCharacterUrl: string = "https://gateway.marvel.com/v1/public/characters?";
  private _publicKey: string = "b99729a0b19b8d9f35e3578a51bb28a9";
  private _privateKey : string = "e10c5fd178394a24113eb008e4d58a4e60128fd1";
  private _offset : string = "100";
  private _hash : string = "a430f51e85e54db3b650f72f7cd97935";

  constructor(private http: HttpClient) { }

  //Generate timeStamp => ts
  private _getTimeStamp(): string{
    return new Date().valueOf().toString();
  }

  getCharacters(): Observable<MarvelResponse<Character>> {
    let timeStamp = this._getTimeStamp();
    //console.log(this._marvelCharacterUrl + "limit=22" +"&offset="+ this._offset +"&ts=1" + "&apikey=" +this._publicKey +"&hash="+ this._hash);
    return this.http.get<MarvelResponse<Character>>(this._marvelCharacterUrl + "limit=22"+ "&offset="+ this._offset +"&ts=1" + "&apikey=" +this._publicKey +"&hash="+ this._hash )
      .pipe( res => {
        console.log('map services');
          return res;
        }

      );
  }

}


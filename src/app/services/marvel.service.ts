import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MarvelResponse } from '../model/MarvelResponse';
import { Md5 } from 'ts-md5/dist/md5';
import { Character } from '../model/Character';
import { Observable } from 'rxjs';

@Injectable()
export class MarvelService {

  private _marvelCharacterUrl: string = "https://gateway.marvel.com/v1/public/";
  private _publicKey: string = "b99729a0b19b8d9f35e3578a51bb28a9";
  private _privateKey : string = "e10c5fd178394a24113eb008e4d58a4e60128fd1";
  private _hash : string = "a430f51e85e54db3b650f72f7cd97935";

  constructor(private http: HttpClient) { }

  //Generate timeStamp => ts
  private _getTimeStamp(): string{
    return new Date().valueOf().toString();
  }

  //Generate Hash => a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey)
  private _getHash(timeStamp: string) : string {

    let hashGenerator : Md5 = new Md5();
    hashGenerator.appendStr(timeStamp);
    hashGenerator.appendStr(this._privateKey);
    hashGenerator.appendStr(this._publicKey);

    // Generate the MD5 hex string
    let hash : string = hashGenerator.end().toString();
    return hash;
  }

  /* Call service of characters of Marvel API
      limit: Limit the result set to the specified number of resources.
      offset: Skip the specified number of resources in the result set.
   */
  getCharacters(limit: number,offset:number): Observable<MarvelResponse<Character>> {
    let timeStamp = this._getTimeStamp();
    let hash = this._getHash(timeStamp);

    let urlCallAPIService = this._marvelCharacterUrl + "characters?orderBy=name" + "&limit="+ limit + "&offset="+offset+ "&ts=" + timeStamp + "&apikey=" + this._publicKey + "&hash=" + hash;

    return this.http.get<MarvelResponse<Character>>(urlCallAPIService)
      .pipe( res => {
        console.log('call Marvel Api');
          return res;
        }
      );
  }

}


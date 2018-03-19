import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // make http available
import { AppComponent } from './app.component';
import { CharactersComponent } from './view/characters/characters.component';
import { MarvelService } from './services/marvel.service';
import { ModalComponent } from './view/modal/modal.component';
import { LoaderComponent } from './view/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    ModalComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ MarvelService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

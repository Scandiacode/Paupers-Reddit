import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RedditpostComponent } from './redditpost/redditpost.component';
import { ReddithomeComponent } from './reddithome/reddithome.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditpostComponent,
    ReddithomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

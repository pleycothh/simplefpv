import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RtComponent } from './rt/rt.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LightgalleryModule } from 'lightgallery/angular';
import { HomeComponent } from './rt/home/home.component';
import { FlashComponent } from './rt/flash/flash.component';

@NgModule({
  declarations: [
    AppComponent,
    RtComponent,
    HomeComponent,
    FlashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule, 
    FormsModule,
    LightgalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

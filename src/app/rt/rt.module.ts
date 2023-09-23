import { NgModule, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { LightgalleryModule } from 'lightgallery/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, } from '@angular/material/toolbar';
import {MatButtonModule, } from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';
import { RtComponent } from './rt.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FlashComponent } from './home/flash/flash.component';
import { RtRoutingModule } from './rt-routing.module';
import { SharedComponent } from './shared/shared.component';
import { NewsComponent } from './news/news.component';
import { GuidComponent } from './guid/guid.component';
import { BuildComponent } from './build/build.component';
import { BuyComponent } from './buy/buy.component';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    LightgalleryModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RtRoutingModule,
  ],
  declarations: [
    RtComponent,
    
    NavbarComponent,
    HomeComponent,
    FlashComponent,
    SharedComponent,
    NewsComponent,
    GuidComponent,
    BuildComponent,
    BuyComponent
  ],
  exports: [],
  bootstrap: []
})


export class RtModule{

}

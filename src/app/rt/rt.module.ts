import { NgModule, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FlashComponent } from './flash/flash.component';
import { RtComponent } from './rt.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
 //   RtComponent,
  //  HomeComponent,
  //  FlashComponent,
  
   // NavbarComponent
  
    AboutComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [],
  bootstrap: []
})


export class RtModule{

}

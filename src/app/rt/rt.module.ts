import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RtComponent } from './rt.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    RtComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class RtModule { }

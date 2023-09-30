import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RtComponent } from './rt.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RtRoutingModule } from './rt-routing.module';
import { SidebarsComponent } from './navbar/sidebars/sidebars.component';



@NgModule({
  declarations: [
    RtComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    SidebarsComponent
  ],
  imports: [
    CommonModule,
    // Routing
    RtRoutingModule,
  ]
})
export class RtModule { }

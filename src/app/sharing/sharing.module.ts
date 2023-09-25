import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,

    // Material
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatBadgeModule
  ]
})
export class SharingModule { }

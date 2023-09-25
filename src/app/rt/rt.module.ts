import { NgModule, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightgalleryModule } from 'lightgallery/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RtComponent } from './rt.component';
import { HomeComponent } from './home/home.component';
import { FlashComponent } from './home/flash/flash.component';
import { RtRoutingModule } from './rt-routing.module';
import { GuidComponent } from './guid/guid.component';
import { BuildComponent } from './build/build.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryLightComponent } from './gallery/gallery-light/gallery-light.component';
import { StoreComponent } from './store/store.component';
import { SharingModule } from '../sharing/sharing.module';
import { CartComponent } from './store/cart/cart.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatToolbarModule, } from '@angular/material/toolbar';
import { MatButtonModule, } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FiltersComponent } from './store/components/filters/filters.component';
import { ProductBoxComponent } from './store/components/product-box/product-box.component';
import { ProductsHeaderComponent } from './store/components/products-header/products-header.component';
import { HeaderComponent } from './store/components/header/header.component';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    LightgalleryModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    
    // Material
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSlideToggleModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatExpansionModule,
    MatTreeModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,

    // Routing
    RtRoutingModule,
   // SharingModule
  ],
  declarations: [
    RtComponent,
    
    HomeComponent,
    FlashComponent,
    GuidComponent,
    BuildComponent,
    MainNavComponent,
    GalleryComponent,
    GalleryLightComponent,
    
    // Store
    StoreComponent,
    CartComponent,
    FiltersComponent,
    ProductBoxComponent,
    ProductsHeaderComponent,
    HeaderComponent
  ],
  exports: [],
  bootstrap: []
})


export class RtModule{

}

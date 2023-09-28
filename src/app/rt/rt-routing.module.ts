import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { RtComponent } from './rt.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GuidComponent } from './guid/guid.component';
import { BuildComponent } from './build/build.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryDetailsComponent } from './gallery/gallery-details/gallery-details.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './store/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: RtComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'gallery',
        children: [
          {path:'',component: GalleryComponent},
          {path:':id',component: GalleryDetailsComponent}
        ]
      },
      { path: 'guid', component: GuidComponent },
      { path: 'build', component: BuildComponent },
      { path: 'store',
        children: [
          {
            path: '',
            component: StoreComponent,
          },
          {
            path: 'cart',
            component: CartComponent,
          },
          { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]},
      { path: 'about', component: AboutComponent }

    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)

  ],
  exports: [
    RouterModule
]
})
export class RtRoutingModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { NbCardModule, NbStatusService } from '@nebular/theme';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    declarations: [
        AdminComponent,
        AdminNavbarComponent
    ],
    imports: [
      NbCardModule,
      AdminRoutingModule
      
    ],
    providers: [NbStatusService],

})
export class AdminModule { }
 
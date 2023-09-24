import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(private router: Router) {}

  goToHomePage() {
    this.router.navigate(['/home']);
  }

  // TODO: 
  // manage user setting
  // personal config page
  // manage user account
}

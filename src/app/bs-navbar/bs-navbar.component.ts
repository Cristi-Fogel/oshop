import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  // userDisplayName = localStorage.getItem('user');
  userDisplayName = JSON.parse(localStorage.getItem('user') || '{}');

  constructor(public authService: AuthService) { }
 
  // constructor() { }
  ngOnInit(): void {   
  }

  
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-signin-dashboard',
  templateUrl: './signin-dashboard.component.html',
  styleUrls: ['./signin-dashboard.component.css']
})
export class SigninDashboardComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}

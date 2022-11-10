
import { Component, OnInit } from '@angular/core';

import { getAuth, signInWithRedirect, signInWithPopup, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor() { }
  

  ngOnInit(): void {
  }

  login(){
    const provider = new GoogleAuthProvider();
  }

  

}

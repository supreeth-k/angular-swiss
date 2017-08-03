import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { AuthorizationService } from './../authorization.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor(private authService: AuthorizationService) { }

  ngOnInit() {
  }

  onSignup(form : NgForm){
      const email = form.value.email;
      const username = form.value.username;
      const password = form.value.password;
      this.authService.registerUser(email, username, password);
  }
}

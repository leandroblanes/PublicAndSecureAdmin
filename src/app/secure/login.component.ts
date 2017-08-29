import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../services/user';
import { UserService } from './../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  { 

  constructor( private router: Router, private userService: UserService ) { }

  model = new User();
  msg = "";

  entrar() : void {
    this.userService.login(this.model.login, this.model.senha).then(user => {
      this.router.navigate(['/admin']);
    }).catch(user => {
      this.msg = "Login inválido! (use admin com senha 123)";
    })
  }
}

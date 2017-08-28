import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';

@Component({
  selector: 'secure',
  template: `
    <h2>Admin</h2>
    <a *ngIf="isLogged" (click)="sair()" href="javascript:;">sair</a>
    <router-outlet></router-outlet>
  `,
})
export class SecureComponent  { 
  constructor(private router: Router, private userService: UserService) {}

  public isLogged = this.userService.isLogged();

  sair() : void {
    this.userService.logout();
    this.isLogged = false;
    this.router.navigate(['/admin/login']);
  }
}

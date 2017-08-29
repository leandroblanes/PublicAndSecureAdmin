import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { LoginComponent } from './login.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent  { 
  constructor(private router: Router, private userService: UserService, private modalService: NgbModal) {

    if (!this.userService.isLogged())
      this.modalService.open(LoginComponent);
  }

  sair() : void {
    this.userService.logout();
    this.router.navigate(['/admin/login']);
  }
}

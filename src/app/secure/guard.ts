import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from './../services/user.service';

@Injectable()
export class Guard implements CanActivate {

  constructor( private router: Router, private userService: UserService ) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {

    if ( this.userService.isLogged() || route.children[0].url[0].path == 'login' )
      return true;

    this.router.navigate(['/admin/login']);
    return true;
  }
}
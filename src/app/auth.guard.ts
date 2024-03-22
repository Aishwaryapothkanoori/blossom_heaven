import { Injectable, inject } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';


@Injectable({   
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.loginService.getUserLoggedStatus()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
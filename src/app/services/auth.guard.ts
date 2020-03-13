import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isAuthenticated = false;
  constructor(private route: Router) {
  }

  canActivate(): boolean {
    if (!this.isAuthenticated) {
      this.route.navigate(['/']);
      return false;
    }
    else{
      return true;
    }
  }

}

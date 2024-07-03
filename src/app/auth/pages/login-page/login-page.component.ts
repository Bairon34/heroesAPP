import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  constructor(private authService: AuthService, private router : Router){}


  onLogin():void{
    this.authService.login('ba@gmail.com','1233456')
    .subscribe(user => {
      this.router.navigate(['/'])
    })
  }


}

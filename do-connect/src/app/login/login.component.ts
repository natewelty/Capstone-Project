import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserAuthenticationRequest } from '../userauthenticationrequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginInfo: UserAuthenticationRequest = new UserAuthenticationRequest("","");
  constructor(private userService:UserService, private router:Router){}

  attemptLogin(){
    this.userService.login(this.loginInfo).subscribe(data=>{
      console.log(data);
      this.goToHomePage();
    },
    error=>console.log(error))
  }

  goToHomePage(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log(this.loginInfo);
    this.attemptLogin();
  }
}

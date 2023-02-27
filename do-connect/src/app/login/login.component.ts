import { Component } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
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
      localStorage.setItem("access_token",data.token);
      let user = this.userService.getUserByUsername(this.loginInfo.username);
      user.subscribe(u=>{
        console.log("This is u: ");
        console.log(u);
        this.userService.setUser(u);
        this.loginInfo = new UserAuthenticationRequest("","");
        alert("Login successful.");
        this.goToHomePage();
      });
        
      
    },

    error=>console.log(error))
    
  }
  toSignup(){
    this.router.navigate(['registrationcomponent']);
  }
  goToHomePage(){
    this.router.navigate(['/']);
  }

  onSubmit2(){
    console.log(this.userService.user);
    console.log(this.userService.isLoggedIn());
    console.log(this.userService.isAdmin());
    this.router.navigate(['chatdashboard']);
    
  }
  isLoggedIn():boolean{
    return this.userService.isLoggedIn();
  }
  

  onSubmit(){
    console.log(this.loginInfo);
    this.attemptLogin();
  }

}

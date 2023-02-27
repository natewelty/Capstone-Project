import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserCreateRequest } from '../usercreaterequest';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationInfo: UserCreateRequest = new UserCreateRequest("","","USER","","");
  constructor(private userService:UserService, private router:Router){}

  attemptRegistration(){
    let newUserAttempt =this.userService.signup(this.registrationInfo)
    newUserAttempt.subscribe(data=>{
      console.log(data);
      this.registrationInfo = new UserCreateRequest("","","USER","","");
      console.log(this.registrationInfo);
      alert("User created");
      this.router.navigate(['logincomponent']);
    });
    
  }

  goToHomePage(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log(this.registrationInfo);
    this.attemptRegistration();
  }
}

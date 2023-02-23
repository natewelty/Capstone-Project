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
    this.userService.signup(this.registrationInfo).subscribe(data=>{
      console.log(data);
      this.goToHomePage();
    },
    error=>console.log(error))
  }

  goToHomePage(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log(this.registrationInfo);
    this.attemptRegistration();
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { SearchquestionComponent } from './searchquestion/searchquestion.component';
import { DisplayquestionComponent } from './displayquestion/displayquestion.component';
import { CreateanswerComponent } from './createanswer/createanswer.component';
import { PendinganswerComponent } from './pendinganswer/pendinganswer.component';
import { PendingquestionComponent } from './pendingquestion/pendingquestion.component';
import { ChatdashboardComponent } from './chatdashboard/chatdashboard.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FileuploadcomponentComponent } from './fileuploadcomponent/fileuploadcomponent.component';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationbarComponent,
    RegistrationComponent,
    NewquestionComponent,
    SearchquestionComponent,
    DisplayquestionComponent,
    CreateanswerComponent,
    PendinganswerComponent,
    PendingquestionComponent,
    ChatdashboardComponent,
    ChatroomComponent,
    HomeComponent,
    FileuploadcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:8080"],
        disallowedRoutes: ["localhost:8080/user/login", "localhost:8080/user/adduser"],}}),
    HttpClientModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

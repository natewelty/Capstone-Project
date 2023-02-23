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

import { ChatdashboardComponent } from './chatdashboard/chatdashboard.component';
import { ChatroomComponent } from './chatroom/chatroom.component';

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

    ChatdashboardComponent,
    ChatroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["http://localhost:8080"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],}}),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

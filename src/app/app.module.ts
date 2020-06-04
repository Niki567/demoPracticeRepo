import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BatchesComponent } from './batches/batches.component';
import { SliderComponent } from './slider/slider.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RestapiService } from './restapi.service';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const myRoot = [
  {path:'' , component : HomeComponent},
  {path:'login' , component : LoginComponent},
   {path:'Batches' , component : BatchesComponent },
    {path:'trainers', component: TrainersComponent}  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    TrainersComponent,
    ContactusComponent,
    BatchesComponent,
    SliderComponent,
    LogInComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoot),
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [ RestapiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BatchesComponent } from './batches/batches.component';
import { TrainersComponent } from './trainers/trainers.component';


const routes: Routes = [
  {path:'' , component : HomeComponent},
  {path:'login' , component : LoginComponent},
  {path:'Batches' , component : BatchesComponent},
  {path:'trainers', component: TrainersComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ AdminComponent } from './admin/admin.component';
import{SocietyComponent} from './society/society.component'
import { ResidentsComponent } from './residents/residents.components';
import{ EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:'society', component:SocietyComponent},
  {path:'',redirectTo:'/society',pathMatch:'full'},
  {path:'residents', component:ResidentsComponent},
  {path:'employee', component:EmployeeComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

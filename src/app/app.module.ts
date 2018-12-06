import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import{ SideMenuComponent } from './sidemenu/sidemenu.component';
import{SocietyComponent} from './society/society.component';
import{ ResidentsComponent } from './residents/residents.components';
import { EmployeeComponent } from './employee/employee.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
       } 
       from '@angular/material';
import{ AdminService } from './admin.service'
import{ HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SideMenuComponent,
    SocietyComponent,
    ResidentsComponent,
    EmployeeComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }

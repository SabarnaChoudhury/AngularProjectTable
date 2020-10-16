import { RouterModule } from '@angular/router';
import { DataserviceService } from './dataservice.service';
import { NewEmployeeComponent } from './projects-table/new-employee/new-employee.component';
import { EmployeeDetailsComponent } from './projects-table/employee-details/employee-details.component';
import { TableHeaderComponent } from './projects-table/table-header/table-header.component';
import { ProjectsNavbarComponent } from './projects-table/projects-navbar/projects-navbar.component';
import { ProjectsTableComponent } from './projects-table/projects-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { AngularJSComponent } from './angular-js/angular-js.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsTableComponent,
    ProjectsNavbarComponent,
    TableHeaderComponent,
    EmployeeDetailsComponent,
    NewEmployeeComponent,
    ProjectsComponent,
    AngularJSComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:ProjectsTableComponent
      },
      {
        path:'projects',
        component:ProjectsComponent
      },
      {
        path:'AngularJS/:serialNumber',
        component:AngularJSComponent

      }
    ])
  ],
  providers: [
    DataserviceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NewEmployeeComponent } from './projects-table/new-employee/new-employee.component';
import { EmployeeDetailsComponent } from './projects-table/employee-details/employee-details.component';
import { TableHeaderComponent } from './projects-table/table-header/table-header.component';
import { ProjectsNavbarComponent } from './projects-table/projects-navbar/projects-navbar.component';
import { ProjectsTableComponent } from './projects-table/projects-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsTableComponent,
    ProjectsNavbarComponent,
    TableHeaderComponent,
    EmployeeDetailsComponent,
    NewEmployeeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

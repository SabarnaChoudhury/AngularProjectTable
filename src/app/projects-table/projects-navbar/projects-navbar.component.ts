
import { DataserviceService } from './../../dataservice.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { filter, map } from "rxjs/operators";

@Component({
  selector: 'projects-navbar',
  templateUrl: './projects-navbar.component.html',
  styleUrls: ['./projects-navbar.component.css']
})
export class ProjectsNavbarComponent implements OnInit {
@Input() tableData=[];
@Output() sendSearchedData: EventEmitter<object> = new EventEmitter<object>();
searchedData=[];
serviceData;
  constructor(public service:DataserviceService) {}

  ngOnInit(){}
  
  search(key){
    this.service.getToDos()
    .pipe(
      map(item=>(item as any[]).filter(data=>data.projectName==key.value.Search))
    ).subscribe(response=>this.searchedData=response);
    console.log(key.value.Search);
      
    // this.searchedData=this.tableData.filter(item=>item.projectName==key.value.Search);
    setTimeout(() => {
      this.sendSearchedData.emit(this.searchedData);
    }, 1000);
    
    }
}

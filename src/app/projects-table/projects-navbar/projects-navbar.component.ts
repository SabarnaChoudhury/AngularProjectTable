
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
      
    this.searchedData=this.tableData.filter(item=>item.projectName==key.value.Search);
    this.searchedData.length!=0?this.sendSearchedData.emit(this.searchedData):alert("No Data Found!!");
    
    }
}

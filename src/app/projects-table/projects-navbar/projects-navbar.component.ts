import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'projects-navbar',
  templateUrl: './projects-navbar.component.html',
  styleUrls: ['./projects-navbar.component.css']
})
export class ProjectsNavbarComponent implements OnInit {
@Input() tableData=[];
@Output() sendSearchedData: EventEmitter<object> = new EventEmitter<object>();
searchedData=[];
  constructor() { }

  ngOnInit(): void {
  }

  search(s){
    console.log(s.value.Search);
    console.log(this.tableData);
    this.searchedData=this.tableData.filter(item=>item.projectName==s.value.Search);
    console.log(this.searchedData);
    this.sendSearchedData.emit(this.searchedData);
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-body',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css']
})
export class ProjectsTableComponent implements OnInit {
  tableData:any=[];

  constructor(http:HttpClient) { http
    .get("https://jsonblob.com/api/e9d3d0f4-0854-11eb-a3c1-f38ea6f1632a")
    .subscribe(data=>{
      this.tableData=data;
    })


}
  ngOnInit(){
  }

  receiveData(data){
    console.log(data);
    this.tableData=data;
  }

  receiveNewData(data){
    
  
    console.log(data);
  }

  generator(num){
    return new Array(num);
  }

  
}

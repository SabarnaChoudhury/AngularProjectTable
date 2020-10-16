import { DataserviceService } from './../dataservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-angular-js',
  templateUrl: './angular-js.component.html',
  styleUrls: ['./angular-js.component.css']
})
export class AngularJSComponent implements OnInit {
  projectTable : any=[];
  project: any=[];
  p:any;
  Ishidden=true;
  constructor(public service:DataserviceService,public route:ActivatedRoute) {
    
   }
  
  ngOnInit(){
    this.service.getToDos().subscribe(res=>{this.projectTable=res});
    // console.log(this.projectTable);
    this.route.paramMap
    .subscribe(params=>{
     this.p= +params.get('serialNumber');
     console.log(this.p);
    })

  }

  log(){
    this.project=this.projectTable.filter(item=>item.serialNumber==this.p.toString())
    console.log(this.project);
    this.Ishidden=!this.Ishidden;
  }
}

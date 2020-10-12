
import { filter,map } from 'rxjs/operators';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { from, Observable, of, pipe } from 'rxjs';

@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() parentData=[];
  @Output() sendData=new EventEmitter();
  modifiedData=[];
  obs;
  constructor() { }

  ngOnInit(): void {
  }

  deleteRecords(){
    this.obs=of(this.parentData);
    this.obs.pipe(
      map(item=>(item as any[]).filter(data=>data.checked==false)))
      .subscribe(response=>this.modifiedData=response);
    // this.modifiedData=this.parentData.filter(item=>item.checked==false);
    setTimeout(() => {
      this.sendData.emit(this.modifiedData);
    }, 1000);
    
  }
 
}

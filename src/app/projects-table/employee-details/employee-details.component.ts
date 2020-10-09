import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() parentData=[];
  @Output() sendData=new EventEmitter();
  modifiedData=[];
  constructor() { }

  ngOnInit(): void {
  }

  deleteRecords(){
    this.modifiedData=this.parentData.filter(item=>item.checked==false);
    this.sendData.emit(this.modifiedData);
  }
 
}

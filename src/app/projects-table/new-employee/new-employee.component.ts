import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent {
  @Input() parentData = []
  @Output() sendNewData: EventEmitter<object> = new EventEmitter<object>();
  constructor(private http:HttpClient){
  }

  insert(f) {
    this.parentData.push({
      projectName: f.value.projectName,
      teamMembers: f.value.teamMember,
      projectProgress: f.value.projectProgress,
      serialNumber: (this.parentData.length + 1).toString(),
      Status: f.value.projectProgress >= 50 ? "On Track" : "Off Track",
      checked: f.value.projectProgress >= 50 ? false : true
    });
    this.sendNewData.emit(this.parentData);
    f.reset();
  }
}

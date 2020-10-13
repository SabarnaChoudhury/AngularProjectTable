import { Component,EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent {
  @Input() parentData = []
  @Output() sendNewData: EventEmitter<object> = new EventEmitter<object>();
  constructor(){
  }

  form=new FormGroup({
    projectName:new FormControl('',Validators.required),
    teamMember:new FormControl('',[Validators.required,Validators.min(3)]),
    projectProgress:new FormControl('',Validators.required)
  })

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
  
    console.log(this.form);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent implements OnInit {
  header=["#","projectName","teamMembers","projectProgress","Status","Edit"]
  constructor() { }

  ngOnInit(): void {
  }

}

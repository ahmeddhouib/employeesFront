import {Component, OnInit} from '@angular/core';
import {Employee} from "./employee";
import {ApicallService} from "./apicall.service";
import {OrderPipe} from "ngx-order-pipe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pageEmployees: any;
  pageNumber : number = 1;
  order : string = 'employee_name';
  reverse: boolean = false;
  sortedCollection: any[];

  constructor(private apiService: ApicallService,private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.pageEmployees, 'employee_name');
    console.log(this.sortedCollection);
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  ngOnInit() {
    this.getEmployeeList();
  }

    getEmployeeList() {
    this.apiService.getEmployes()
      .subscribe(data => { this.pageEmployees = data.data;
                                  console.log(data);
      }, err => {console.log(err); } );
  }



}

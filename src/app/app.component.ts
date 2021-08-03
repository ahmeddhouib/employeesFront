import {Component, OnInit} from '@angular/core';
import {Employee} from "./employee";
import {ApicallService} from "./apicall.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pageEmployees: any;
  pageNumber : number = 1;

  constructor(private apiService: ApicallService) {
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

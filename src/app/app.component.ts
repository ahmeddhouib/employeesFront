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

  // pageEmployees: any[];
  pageEmployees: Employee[] = [];
  pageNumber : number = 1;
  order : string = 'employee_name';
  reverse: boolean = false;
  sortedCollection: any[];
  NewEmp  = {id: null, employee_name: "", employee_salary: null,employee_age: null, employee_image: ""};
  NombreEmployee : number = 0;
  newEmployee = {name: "", salary: null,age: null, image: ""};

  constructor(private apiService: ApicallService,private orderPipe: OrderPipe) {
    this.getEmployeeList();
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
      .subscribe((data : Employee[] ) => { this.pageEmployees = data;

                                this.NombreEmployee = data.length;
                                  console.log(data);
      }, err => {console.log(err); } );
  }

  deleteEmployeeData(id:number) {
    this.sortedCollection = this.orderPipe.transform(this.pageEmployees, this.order);
    for(let i = 0; i < this.pageEmployees.length; i++){
      if(id == this.pageEmployees[i].id){
        // console.log(id);
        // console.log(i);
        // console.log(this.pageEmployees.length);
        this.sortedCollection = this.pageEmployees.splice(i,1);
      }
    }
  }

  createEmployeeData(){
    this.NewEmp.id =  this.NombreEmployee + 1;
    this.NewEmp.employee_name =  this.newEmployee.name ;
    this.NewEmp.employee_salary =  this.newEmployee.salary ;
    this.NewEmp.employee_age =  this.newEmployee.age;
    this.NewEmp.employee_image =  this.newEmployee.image;

    this.pageEmployees.push(this.NewEmp);
    this.sortedCollection = this.orderPipe.transform(this.pageEmployees, this.order);
     console.log(this.sortedCollection);
    this.newEmployee.name = "";
    this.newEmployee.salary = null;
    this.newEmployee.age = null;
    this.newEmployee.image =  null;

  }


}

import { Component } from '@angular/core';
import { StudentDataService } from 'src/app/services/student-data.service';

@Component({
  selector: 'app-vhaash',
  templateUrl: './vhaash.component.html',
  styles: [
  ]
})
export class VhaashComponent {
 b25Students = [
  {name : 'rakesh', mobile : 111},
  {name : 'sanket', mobile : 222},
  {name : 'sonali', mobile : 333},
  {name : 'kartik', mobile : 444}
 ];

 b26Students = [
  {name : 'prathmesh', mobile : 111},
  {name : 'jayant', mobile : 222},
  {name : 'bharti', mobile : 333},
  {name : 'ajinkya', mobile : 444}
 ];

  students : any;
 
   constructor(private studentDataService : StudentDataService){
     this.students = studentDataService.getAllStudents();
   }
 
}

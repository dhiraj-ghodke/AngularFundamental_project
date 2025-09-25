import { Component } from '@angular/core';
import { StudentDataService } from 'src/app/services/student-data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [
  ]
})
export class StudentComponent {

  students : any;

  constructor(private studentDataService : StudentDataService){
    this.students = studentDataService.getAllStudents();
  }

 

}

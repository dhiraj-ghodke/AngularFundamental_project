import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: []
})
export class StudentDetailsComponent {

  selectedRollNumber!: number;
  selectedName!: string;
  selectedCity!: string;
  selectedBatch!: number;

  students = [
    { rollNumber: 1, name: 'sachin', city: 'pune', batch: 25 },
    { rollNumber: 2, name: 'sonali', city: 'mumbai', batch: 26 },
    { rollNumber: 3, name: 'shweta', city: 'pune', batch: 25 },
    { rollNumber: 4, name: 'rakesh', city: 'mumbai', batch: 27 },
    { rollNumber: 5, name: 'shivam', city: 'pune', batch: 26 },
    { rollNumber: 6, name: 'shivani', city: 'mumbai', batch: 26 },
  ];

  constructor(private route: ActivatedRoute) {
    // get roll number from route params (convert to number)
    this.selectedRollNumber = +this.route.snapshot.params['rn'];

    // find student
    const student = this.students.find(s => s.rollNumber === this.selectedRollNumber);

    if (student) {
      this.selectedName = student.name;
      this.selectedCity = student.city;
      this.selectedBatch = student.batch;
    }
  }
}

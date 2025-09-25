import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor() { }

 getAllStudents(){
  return [
  {rollNumber : 1, name : 'sachin', city : 'pune', batch : 25},
  {rollNumber : 2, name : 'sonali', city : 'mumbai', batch : 26},
  {rollNumber : 3, name : 'shweta', city : 'pune', batch : 25},
  {rollNumber : 4, name : 'rakesh', city : 'mumbai', batch : 27},
  {rollNumber : 5, name : 'shivam', city : 'pune', batch : 26},
  {rollNumber : 6, name : 'shivani', city : 'mumbai', batch : 26},
 ];
 }

}

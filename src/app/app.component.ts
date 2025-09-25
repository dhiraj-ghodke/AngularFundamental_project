import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // selector : '.approot',
  // selector : '[approot]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // model
  name : string = "bela ghodke";

  isDisabled : boolean = false;

  // counter : number = 1;

  // increment(){
  //   this.counter++;
  // }

  // counter : number = 1;

  // increment(){
  //   this.counter++;
  // }

sentence : string = 'I am Learning angular';

dob = new Date('2025/01/27');

fees = 30000;

users = [
  { "id": 101, "name": 'vishal', "city": 'pune'},
  { "id": 101, "name": 'vishal', "city": 'pune'},
  { "id": 101, "name": 'vishal', "city": 'pune'},
  { "id": 101, "name": 'vishal', "city": 'pune'},
  { "id": 101, "name": 'vishal', "city": 'pune'},
  { "id": 101, "name": 'vishal', "city": 'pune'}
];

}

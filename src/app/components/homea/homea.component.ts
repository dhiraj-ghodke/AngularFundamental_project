import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homea',
  templateUrl: './homea.component.html',
  styleUrls: ['./homea.component.css']
})
export class HomeaComponent {
title : string = 'HOME A COMPONENT TITLE';
 bgColor : string = 'darkgreen';
 color : string = "red";

constructor(private router : Router){

}

styling =
{
  'color': 'white',
  'background-color': 'blue',
};

classes =
{
 'firstClass':false,
 'secondClass':true,
};

isVisible : boolean = true;

names : string[] = 
['ajinkya', 'aditi', 'prem', 'rakesh']

// names : string[] = [];

navigateToHomeB(){
// all logic goes here 

  console.log('navigateToHomeB() called');

  // redirect to HomeB Page
  this.router.navigate(['homeb']);  
}

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

myForm : FormGroup;

constructor(private fb : FormBuilder){
  
}
  ngOnInit(): void {
    this.myForm= this.fb.group({
      firstName : ['', [ Validators.required, Validators.minLength(2)]],
      lastName : ['', Validators.required],
      email : ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,4}$')]],
      address : this.fb.group({
        landmark : [''],
        village : ['']
      })
    });
  }

  formSubmit(){
    console.log(this.myForm.value);
    
  }

  clearForm(){
    this.myForm.reset();
  }

  initialValueOnLoad(){
    this.myForm.reset({
      firstName : 'bela',
      lastName : 'ghodke',
      email : 'bela@gmail.com',
      address : {
        landmark : 'Kapil Dreams Socoity',
        village : 'Narhegaon'
      }
    });
  }
}

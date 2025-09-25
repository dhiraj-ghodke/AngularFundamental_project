import { Component } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {
  saveForm(form: any){
    console.log('form is submitted');
   // console.log(form.value);
   // console.log(from);
   //console.log(myForm.controls.firstName.invalid);

  //  console.log(form.controls["firstName"]);

  console.log(form.value);
  
   
  }
}

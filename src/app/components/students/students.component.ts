import { AfterContentInit, Component, ContentChild, ContentChildren, Input } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [],
})
export class StudentsComponent implements AfterContentInit {

  @Input()
 students : any;

//  @ContentChild('header')  // elementRef
//  head: any;
 
//  ngAfterContentInit(): void {
//    console.log(this.head);

//     this.head.nativeElement.style.backgroundColor = 'yellow';

//    // this.head.nativeElement.innerText = "Batch 25 Updated";
//  }

@ContentChildren('header')
head: any;   // QueryList

ngAfterContentInit(): void {
  this.head.first.nativeElement.style.backgroundColor = 'yellow';

  this.head.last.nativeElement.style.backgroundColor = 'yellow';
}

}

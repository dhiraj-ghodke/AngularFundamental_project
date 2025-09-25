import { AfterViewChecked, AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit, AfterViewChecked {
 
 parentData : string = "amol ghodke";

 bgColor : string = 'yellow';

 child : string | undefined;

 recieveData(data : any){
  this.child = data;
 }

 @ViewChild('heading')
  heading : ElementRef;
 
  // @ViewChildren('para')   // returns a querylist
  // para : string;

   @ViewChildren('para') para!: QueryList<ElementRef>;

   childDataUsingViewChild: any;

   @ViewChild('child')
   childComp: any;   // it will hold reference of childComponent Class

  constructor(){  
  
    //console.log(this.heading);
    // this.childDataUsingViewChild = this.childComp.childOtherData;
    
  }
  ngAfterViewChecked(): void {
    this.heading.nativeElement.style.backgroundColor = this.bgColor;
  }

  ngAfterViewInit(): void {
    console.log(this.heading?.nativeElement);
    console.log(this.heading?.nativeElement.innerText);

    this.heading.nativeElement.style.backgroundColor = this.bgColor;
    
     this.heading.nativeElement.style.color = 'red';
     this.heading.nativeElement.innerText = "Heading Text Updated";
    
  console.log(this.para);
  
  this.para.first.nativeElement.style.color = 'green';

  this.para.last.nativeElement.style.color = 'purple';

  this.childDataUsingViewChild = this.childComp.childOtherData;

 }

 inc(){
   this.childComp.increment();
 }

 dec(){
  this.childComp.decrement();
 }

}

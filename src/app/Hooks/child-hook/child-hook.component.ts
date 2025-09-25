import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-child-hook',
  templateUrl: './child-hook.component.html',
  styleUrls: ['./child-hook.component.css']
})
export class ChildHookComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  parentColor : string;

  @ContentChild('head1')
  parentHead : ElementRef;

  @Input()
  productData : any;

  allMessage : any;

  @ViewChild('head2')
  childHead : ElementRef;

  constructor(private messages : MessagesService){
    console.log('child hook constructor called');
    
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('child hook  ngOnChanges() called');
    console.log(changes);
    
    
  }

  ngOnInit(){
    console.log('child hook ngOnInit() called');
    this.allMessage = this.messages.getMessages();
  }

  ngDoCheck(): void {
    console.log('child hook  ngDoCheck() called');
  }

  ngAfterContentInit(): void {
        console.log('child hook ngAfterContentInit() called');
        this.parentHead.nativeElement.setAttribute('style', `color : ${this.parentColor}`);
  }

  ngAfterContentChecked(): void {
    console.log('child hook ngAfterContentInit() called');
        this.parentHead.nativeElement.setAttribute('style', `color : ${this.parentColor}`);
  }

   ngAfterViewInit(): void {
    console.log('child hook  ngAfterViewInit() called');
    this.childHead.nativeElement.setAttribute('style', `color : ${this.parentColor}`);
  }

   ngAfterViewChecked(): void {
    console.log('child hook  ngAfterViewInit() called');
    this.childHead.nativeElement.setAttribute('style', `color : ${this.parentColor}`);
  }
 
  ngOnDestroy(): void {
    console.log('child hook   ngOnDestroy() called');

    // confirm('Please wait do not close this page');
  }

}

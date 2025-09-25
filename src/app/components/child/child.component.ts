import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  childOtherData : string = "child component other data";

  counter : number = 0;

  @Input()
  parent : string | undefined;

  @Output()
 sendData : EventEmitter<string> = new EventEmitter<string>();

  childData : string = 'bela ghodke';

  sendDataToParent(){
    this.sendData.emit(this.childData)
  }

  sendDataTurant(){
    this.sendData.emit(this.childData);
  }

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

}

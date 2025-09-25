import { Component } from '@angular/core';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent {
 color : string = 'yellow';

 product = {name : 'shirt', price : 2000};
}

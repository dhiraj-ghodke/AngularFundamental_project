import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges{

  @Input()
  appHighlight : string | undefined;

  constructor(private e1 : ElementRef, private renderer : Renderer2) { 
  // renderer.setStyle( e1.nativeElement, 'backgroundColor', 'yellow')

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.appHighlight)
      {
       this.renderer.setStyle( this.e1.nativeElement, 'backgroundColor', this.appHighlight);
      }
      else{
        this.renderer.setStyle( this.e1.nativeElement, 'backgroundColor', 'yellow');
      }
  }

}

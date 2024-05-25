import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverColorBlue]'
})
export class HoverColorDirective {

  constructor(private el: ElementRef,private render:Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder('2px solid blue')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(null)
  }


  setBorder(border:string | null){
    this.render.setStyle(this.el.nativeElement,'border',border)
  }

}

import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appInputFocus]'
})
export class InputFocusDirective implements OnChanges {

  constructor(private element: ElementRef) { }

  @Input('appInputFocus') private focused: boolean;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.focused) {
      setTimeout(() => this.element.nativeElement.select(), 0);
    }
  }
}

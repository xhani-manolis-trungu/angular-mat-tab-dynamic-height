import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tall-component',
  templateUrl: './tall.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class TallComponent  {
  @Input() name: string;
}

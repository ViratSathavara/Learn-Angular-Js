import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ng-style',
  imports: [MatButtonModule, CommonModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {

div1BackColor: string = '';

changeBgColor(color: string) {
  this.div1BackColor = color;
}

}

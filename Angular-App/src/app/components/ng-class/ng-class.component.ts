import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ng-class',
  imports: [FormsModule, CommonModule, MatButtonModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {

bgDiv1Color = '!bg-green-400';
bgDiv2Color = '!bg-red-400';
div3Class: string = '';


changeColor (color: string) {
  this.bgDiv1Color = color;
}

changeDiv2Color (color: string) {
  this.bgDiv2Color = color;
}

isChecked = false;

}

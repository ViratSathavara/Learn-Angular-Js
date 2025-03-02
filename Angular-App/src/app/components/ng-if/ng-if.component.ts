import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule, MatButtonModule, FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css',
})
export class NgIfComponent {
  isBoxVisible: boolean = true;

  showHideBox(show: boolean) {
    this.isBoxVisible = show;
  }


  number1: string = '';
  number2: string = '';

}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.html',
  styleUrl: './my-button.css'
})
export class MyButton {
  @Input() data: any = { label: 'Hello World' };
  @Output() dataChange = new EventEmitter<any>();

  onClick() {
    const modifiedData = { ...this.data, clicked: true };
    this.dataChange.emit(modifiedData);
  }
}

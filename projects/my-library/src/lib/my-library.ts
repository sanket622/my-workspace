import { Component } from '@angular/core';
import { MyButton } from './my-button/my-button';

@Component({
  selector: 'lib-my-library',
  standalone: true,
  imports: [MyButton],
  template: `
    <p>
      my-library works!
    </p>
    <lib-my-button></lib-my-button>
  `,
  styles: ``
})
export class MyLibrary {

}

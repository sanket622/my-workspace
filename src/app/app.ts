import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyButton } from 'my-library';
import {Practice} from './practice/practice'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyButton,Practice],
  template: `
    <router-outlet></router-outlet>
    <lib-my-button></lib-my-button>
    <button>Add Card</button>
      <app-practice></app-practice>
  `,
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-workspace';
}

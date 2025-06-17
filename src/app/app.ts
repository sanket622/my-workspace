import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyButton } from 'my-library';
import { Practice } from './practice/practice'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyButton, Practice,CommonModule],
  template: `
    <router-outlet></router-outlet>
    <lib-my-button></lib-my-button>
    <button (click)="addCard()">Add Card</button>
    <div *ngFor="let card of cards">
      <app-practice></app-practice>
    </div>
  `,
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-workspace';
  cards: number[] = [1];
  
  addCard() {
    this.cards.push(this.cards.length + 1);
  }
}

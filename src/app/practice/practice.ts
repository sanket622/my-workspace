import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './practice.html',
  styleUrl: './practice.css'
})
export class Practice {
@Input() index: number = 0 ;


}

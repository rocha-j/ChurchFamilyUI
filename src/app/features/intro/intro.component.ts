import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements OnInit {
  @Output() done = new EventEmitter<void>();
  hiding = false;

  ngOnInit() {
    setTimeout(() => {
      this.hiding = true;
      setTimeout(() => this.done.emit(), 700);
    }, 3800);
  }
}

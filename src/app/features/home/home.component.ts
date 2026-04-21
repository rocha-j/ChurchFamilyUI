import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  private autoPlayInterval: any;
  readonly INTERVAL_MS = 5000; // troca a cada 5 segundos

  images: any = [
    { url: '/assets/testeimg.png', alt: 'Slide 1' },
    { url: '/assets/3.png', alt: 'Slide 2' },
    { url: '/assets/4.jpg', alt: 'Slide 3' },
    { url: '/assets/5.jpg', alt: 'Slide 4' },
    { url: '/assets/6.png', alt: 'Slide 5' },
  ];

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  moveNext() {
    this.goTo((this.currentIndex + 1) % this.images.length);
    this.resetAutoPlay();
  }

  movePrev() {
    this.goTo((this.currentIndex - 1 + this.images.length) % this.images.length);
    this.resetAutoPlay();
  }

  goTo(index: number) {
    this.currentIndex = index;
  }

  private startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, this.INTERVAL_MS);
  }

  private stopAutoPlay() {
    clearInterval(this.autoPlayInterval);
  }

  private resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}

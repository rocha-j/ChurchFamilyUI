import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  private autoPlayInterval: any;
  readonly INTERVAL_MS = 5000;

  slides = [
    { bg: '#1a1a2e', imgUrl: './assets/im1.jpg', label: 'Slide 1' },
    { bg: '#16213e', imgUrl: './assets/im2.jpg', label: 'Slide 2' },
    { bg: '#0f3460', imgUrl: './assets/im3.webp', label: 'Slide 3' },
    { bg: '#533483', imgUrl: './assets/im4.jpg', label: 'Slide 4' },
  ];

  cards = [
    {
      title: 'CULTOS',
      desc: 'Confira nossa agenda e participe!',
      cta: 'Saiba mais',
      icon: './assets/logoASF.png',
      imgUrl: './assets/cd2.jpg',
      bg: '#FFFFFF',
      route: '/cults',
    },
    {
      title: 'NÓS',
      desc: 'Conheça nossa história e comunidade.',
      cta: 'Saiba mais',
      icon: './assets/logoASF.png',
      imgUrl: '/assets/cd3.jpg',
      bg: '#FFFFFF',
      route: '/about',
    },
    {
      title: 'CONTATO',
      desc: 'Deseja falar conosco ou fazer um pedido?',
      cta: 'Saiba mais',
      icon: './assets/logoASF.png',
      imgUrl: '/assets/cd1.webp',
      bg: '#FFFFFF',
      route: '/contact',
    },
  ];

  ngOnInit() {
    this.startAutoPlay();
  }
  ngOnDestroy() {
    this.stopAutoPlay();
  }

  moveNext() {
    this.goTo((this.currentIndex + 1) % this.slides.length);
    this.resetAutoPlay();
  }
  movePrev() {
    this.goTo((this.currentIndex - 1 + this.slides.length) % this.slides.length);
    this.resetAutoPlay();
  }
  goTo(index: number) {
    this.currentIndex = index;
  }

  private startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
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

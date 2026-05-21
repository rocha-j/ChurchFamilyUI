import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { IntroComponent } from '../features/intro/intro.component';
import { trigger, transition, query, style, animate, group } from '@angular/animations';

const routeOrder = ['home', 'about', 'cults', 'contact', 'offer'];

function getRouteIndex(url: string): number {
  const segment = url.split('/').filter(Boolean)[0] ?? 'home';
  const idx = routeOrder.indexOf(segment);
  return idx === -1 ? 0 : idx;
}

function smoothAnimation() {
  return [
    query(':enter, :leave', style({
      position: 'absolute',
      top: 0, left: 0,
      width: '100%',
      height: '100%'
    }), { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease',
          style({ opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease',
          style({ opacity: 1 }))
      ], { optional: true })
    ])
  ];
}

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, IntroComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
 animations: [
  trigger('routeAnimation', [
    transition('* <=> *', smoothAnimation())
  ])
]
})
export class ShellComponent {
  showIntro = true;
  isAnimating = false;

  onIntroDone() {
    this.showIntro = false;
  }

  onAnimationStart() {
    this.isAnimating = true;
  }

  onAnimationDone() {
    this.isAnimating = false;
  }

  getRouteState(outlet: RouterOutlet): string {
    if (!outlet.isActivated) return '0';
    const url = outlet.activatedRoute.snapshot.url.join('/');
    return String(getRouteIndex(url));
  }
}

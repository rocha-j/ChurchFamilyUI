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

export function slideAnimation(direction: 'left' | 'right') {
  const enterFrom = direction === 'left' ? '100%' : '-100%';
  const leaveTo   = direction === 'left' ? '-100%' : '100%';
  return [
    query(':enter', style({ transform: `translateX(${enterFrom})`, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }), { optional: true }),
    query(':leave', style({ transform: 'translateX(0)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }), { optional: true }),
    group([
      query(':leave', [
        animate('420ms cubic-bezier(0.4, 0, 0.2, 1)', style({ transform: `translateX(${leaveTo})` }))
      ], { optional: true }),
      query(':enter', [
        animate('420ms cubic-bezier(0.4, 0, 0.2, 1)', style({ transform: 'translateX(0)' }))
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
      transition(':increment', slideAnimation('left')),
      transition(':decrement', slideAnimation('right'))
    ])
  ]
})
export class ShellComponent {
  showIntro = true;

  onIntroDone() {
    this.showIntro = false;
  }

  getRouteState(outlet: RouterOutlet): string {
    if (!outlet.isActivated) return '0';
    const url = outlet.activatedRoute.snapshot.url.join('/');
    return String(getRouteIndex(url));
  }
}

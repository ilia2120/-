import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import {
  APP_NAME,
  DEFAULT_NAVIGATION_NAME,
  NAVIGATIONS_ITEMS,
} from './shared/consts';
import { filter, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  readonly appName = APP_NAME;
  readonly navigationItems = NAVIGATIONS_ITEMS;

  readonly title$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map(() => {
      let route = this.activatedRoute.snapshot.root;

      while (route.firstChild) {
        route = route.firstChild;
      }

      return route.routeConfig
        ? (route.routeConfig.title as string) || DEFAULT_NAVIGATION_NAME
        : DEFAULT_NAVIGATION_NAME;
    })
  );
}

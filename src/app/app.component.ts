import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './route-animations';

@Component({
  selector: 'app-root',
  animations: [fader],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ythi-website-3';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

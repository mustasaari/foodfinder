import { Component } from '@angular/core';

@Component({
  selector: 'navigation-component',
  template: `<div><ul>
  <li><a routerLink="/foodsearch" routerLinkActive="active">Foods</a></li>
  <li><a routerLink="/wines" routerLinkActive="active">Wines</a></li>
            </ul> </div>`,
          styleUrls: ['./navigation.componenet.css']
})
export class NavigationComponent {
  title = 'Foodfinder';
}

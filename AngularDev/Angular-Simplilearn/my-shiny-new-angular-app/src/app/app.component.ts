import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom // Doesn't allow the golbal style to leak inside the component.
})
export class AppComponent {
  title = 'my-shiny-new-angular-app';
}

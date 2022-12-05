import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  message =  `This is some random message demonstrating string interpolation - property binding.`;

  getMessage(){
    return this.message;
  }

}

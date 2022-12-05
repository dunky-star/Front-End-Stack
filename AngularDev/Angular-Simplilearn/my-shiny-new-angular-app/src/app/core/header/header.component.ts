import { Text } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  message =  `This is some random message demonstrating string interpolation - data binding`;
  messageBound =`Bound via proprty binding`;

  getMessage(){
    console.log("This got called!");
    return this.messageBound;
  }
  onClick(){
    alert('Button was clicked!');
  }
  onKeyUp(keyUpEvent: any){
    keyUpEvent.code === 'Enter' && alert('Enter was pressed');
  }
}

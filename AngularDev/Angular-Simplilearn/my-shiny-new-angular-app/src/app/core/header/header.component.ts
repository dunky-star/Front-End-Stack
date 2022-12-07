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

  title = "Angular";
  counter = 0;
  classToSet="positive";

  onCounterChange(buttonType: string){
    buttonType === "INC" ? this.counter++ : this.counter--;
    this.classToSet = this.counter >= 0 ? "positive" : "negative";
  }
}
